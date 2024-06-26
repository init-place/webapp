import { HttpClient } from "@/lib/client/client";
import { Board } from "@/lib/type/board";
import { Board as BoardResponse } from "./board.type"
import { base64ToUint8ClampedArray } from "@/lib/util/binary";
import { RpcClient, RpcWebSocketClient } from "@/lib/client/rpc/client";

export class BoardApi {
  constructor(private readonly client: HttpClient, private readonly rpcClient: RpcClient) {
  }

  async getBoard(boardId: number): Promise<Board> {
    const response = await this.client.get<{ board: BoardResponse }>(`/iplace/board/${boardId}`)

    return new Board(
      response.board.id,
      response.board.name,
      response.board.size_x,
      response.board.size_y,
      response.board.creator,
      response.board.admin,
    )
  }

  async getPixels(boardId: number, start?: number, end?: number): Promise<Uint8ClampedArray> {
    const response = await this.client.get<{
      pixels: string
    }>(`/iplace/board/${boardId}/pixel?start=${start ?? 0}&end=${end ?? 0}`)

    return base64ToUint8ClampedArray(response.pixels)
  }

  subscribeBoard(boardId: number, handler: (boardId: number, pixelIndex: number, color: number) => void): RpcWebSocketClient {
    const webSocket = this.rpcClient.createWebSocketClient()

    webSocket.connect().then(() => {
      webSocket.subscribe(`tm.event='Tx' AND set_pixel.board_id=${boardId}`)
    })

    webSocket.setOnListener((msg) => {
      if (msg["result"] == null || msg["result"]["events"] == null ) {
        return
      }

      handler(
        parseInt(msg["result"]["events"]["set_pixel.board_id"][0]),
        parseInt(msg["result"]["events"]["set_pixel.pixel_index"][0]),
        parseInt(msg["result"]["events"]["set_pixel.color"][0]),
      )
    })

    return webSocket
  }
}
