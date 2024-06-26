import { HttpClient } from "@/lib/client/client";
import { AuthApi } from "@/lib/client/lcd/auth.api";
import { TxApi } from "@/lib/client/lcd/tx.api";

export class LcdClient {
  constructor(readonly lcdUrl: string) {
  }

  readonly client: HttpClient = new HttpClient(this.lcdUrl)

  readonly auth = new AuthApi(this.client)
  readonly tx = new TxApi(this.client)
}
