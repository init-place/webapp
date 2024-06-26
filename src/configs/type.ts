import { Chain } from "@initia/initia-registry-types";

export interface ConfigType {
  name: string
  api: {
    iplaceLcd: string
    iplaceRpc: string
  }
  initiaSchema: {
    iplace: Chain
  }
}
