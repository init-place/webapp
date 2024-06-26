import { Config } from "@/configs";
import { LcdClient } from "@/lib/client/lcd/client";
import { BoardApi } from "@/lib/client/iplace/board.api";
import { RpcClient } from "@/lib/client/rpc/client";

export class IplaceClient extends LcdClient {
  constructor() {
    super(Config.api.iplaceLcd);
  }

  readonly rpc = new RpcClient(Config.api.iplaceRpc)

  readonly board = new BoardApi(this.client, this.rpc)
}
