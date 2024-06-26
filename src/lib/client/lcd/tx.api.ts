import { HttpClient } from "@/lib/client/client";

export class TxApi {
  constructor(private readonly client: HttpClient) {
  }

  async broadcast(bytes: string, mode: "BROADCAST_MODE_SYNC" | "BROADCAST_MODE_ASYNC"): Promise<string> {
    const response = await this.client.post<{
      tx_response: {
        txhash: string,
      }
    }>(`/cosmos/tx/v1beta1/txs`, {
      body: JSON.stringify({
        tx_bytes: bytes,
        mode,
      })
    })

    return response.tx_response.txhash
  }
}
