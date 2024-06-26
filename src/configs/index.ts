import { ConfigType } from "@/configs/type";
import { Localnet } from "@/configs/localnet";

function resolveConfig(): ConfigType {
  const buildConfigSet = process.env.NEXT_PUBLIC_BUILD_CONFIG;

  if (buildConfigSet === "localnet") {
    return Localnet
  }

  return Localnet
}

export const Config = resolveConfig()
