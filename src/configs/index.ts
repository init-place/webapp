import { ConfigType } from "@/configs/type";
import { Localnet } from "@/configs/localnet";
import { Testnet } from "@/configs/testnet";

function resolveConfig(): ConfigType {
  const buildConfigSet = process.env.NEXT_PUBLIC_BUILD_CONFIG;

  if (buildConfigSet === "localnet") {
    return Localnet
  }

  if (buildConfigSet === "testnet") {
    return Testnet
  }

  return Testnet
}

export const Config = resolveConfig()
