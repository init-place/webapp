import { ConfigType } from "@/configs/type";

export const Localnet: ConfigType = {
  name: "localnet",
  api: {
    iplaceLcd: "http://localhost:1317",
    iplaceRpc: "http://localhost:26657"
  },
  initiaSchema: {
    iplace: {
      chain_name: "iplace",
      chain_id: "iplace-dev-8",
      website: "https://init.place",
      pretty_name: "init.place",
      network_type: "devnet",
      bech32_prefix: "init",
      apis: {
        rest: [{ address: "http://localhost:1317" }],
        rpc: [{address: "http://localhost:26657"}],
      },
      fees: { fee_tokens: [{ denom: "uipt", fixed_min_gas_price: 0.15 }] },
      metadata: {
        is_l1: false,
      }
    }
  },
}
