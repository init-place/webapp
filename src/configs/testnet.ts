import { ConfigType } from "@/configs/type";

export const Testnet: ConfigType = {
  name: "testnet",
  api: {
    iplaceLcd: "https://testnet-iplace-lcd.omninode.me",
    iplaceRpc: "https://testnet-iplace-rpc.omninode.me"
  },
  initiaSchema: {
    iplace: {
      chain_name: "iplace",
      chain_id: "iplace-testnet-1",
      website: "https://iplace.omninode.me",
      pretty_name: "init.place",
      network_type: "testnet",
      bech32_prefix: "init",
      apis: {
        rest: [{ address: "https://testnet-iplace-lcd.omninode.me" }],
        rpc: [{address: "https://testnet-iplace-rpc.omninode.me"}],
      },
      fees: { fee_tokens: [{ denom: "uipt", fixed_min_gas_price: 0.15 }] },
      metadata: {
        is_l1: false,
      }
    }
  },
}
