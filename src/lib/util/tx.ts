import { useWallet } from "@initia/react-wallet-widget";
import { InitiaWallet } from "@initia/utils";
import { Config } from "@/configs";
import { useCallback } from "react";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { IplaceClient } from "@/lib/client";
import { base64ToUint8Array, bytesToBase64 } from "@/lib/util/binary";
import { AuthInfo, Coin, Fee, ModeInfo, SignerInfo, SimplePublicKey, } from "@initia/initia.js";
import { SignDoc, Tx, TxBody } from "@initia/initia.proto/cosmos/tx/v1beta1/tx";

async function signTx(wallet: InitiaWallet, signerAddress: string, chainId: string, body: TxBody, gas: number): Promise<Tx> {
  const signer = wallet.getOfflineSigner(chainId)
  const accounts = await signer.getAccounts()
  const account = accounts
    .find((account) => account.address === signerAddress)

  if (account == null) {
    throw Error("Not found wallet")
  }

  const { accountNumber, sequence } = await IplaceClient.auth.getAccountInfo(signerAddress)

  const signerInfo = new SignerInfo(
    new SimplePublicKey(bytesToBase64(account.pubkey)),
    sequence,
    new ModeInfo(new ModeInfo.Single(SignMode.SIGN_MODE_DIRECT)),
  )
  const authInfo = new AuthInfo(
    [signerInfo],
    new Fee(gas, [new Coin(
      Config.initiaSchema.iplace.fees?.fee_tokens[0].denom ?? "uipt",
      Math.ceil((Config.initiaSchema.iplace.fees?.fee_tokens[0].fixed_min_gas_price ?? 0.15) * gas)
    )]))

  const signDoc = SignDoc.fromPartial(
    {
      bodyBytes: TxBody.encode(body).finish(),
      authInfoBytes: authInfo.toBytes(),
      chainId,
      accountNumber,
    }
  )

  const signature = await wallet.signArbitrary(SignDoc.encode(signDoc).finish())
  // const signature = await signer.signDirect(signerAddress, signDoc)

  return Tx.fromPartial({
    body,
    authInfo: authInfo.toProto(),
    signatures: [base64ToUint8Array(signature)],
  })
}

export function useTx(): {
  postTx: (txBody: TxBody, gas: number) => void
} {
  const { wallet, address, signArbitrary } = useWallet()

  const postTx = useCallback((txBody: TxBody, gas: number) => {
    if (wallet == null) {
      return
    }

    if (wallet.type !== "initia") {
      console.error("Support only initia wallet")
      return
    }

    const chainId = Config.initiaSchema.iplace.chain_id
    const provider = wallet.getProvider?.() as InitiaWallet

    signTx(provider, address, chainId, txBody, gas).then((tx) => {
      const encoded = bytesToBase64(Tx.encode(tx).finish())

      return IplaceClient.tx.broadcast(encoded, "BROADCAST_MODE_SYNC")
    }).then((txhash) => {
      console.log(txhash)
    })
  }, [wallet, address])

  return {
    postTx
  }
}
