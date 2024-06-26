export class RpcClient {

  constructor(readonly rpcUrl: string) {
  }

  createWebSocketClient(): RpcWebSocketClient {
    return new RpcWebSocketClient(this.rpcUrl + "/websocket")
  }
}

export class RpcWebSocketClient {

  private connection: WebSocket | null = null;
  private listener: ((msg: any) => void) | null = null;

  constructor(readonly websocketUrl: string) {
  }

  isConnected(): boolean {
    return this.connection != null
  }

  connect(): Promise<void> {
    this.connection = new WebSocket(this.websocketUrl);

    this.connection.onmessage = (event: MessageEvent) => {
      this.listener?.(JSON.parse(event.data));
    }

    return new Promise((resolve, reject) => {
      if (this.connection == null) {
        return reject("Not connected")
      }

      this.connection.onopen = () => resolve()

      if (this.connection.readyState == WebSocket.OPEN) {
        resolve()
      }
    })
  }

  disconnect() {
    this.connection?.close()
    this.connection = null
  }

  subscribe(query: string) {
    if (this.connection == null) {
      throw Error("Not connected")
    }

    this.connection.send(JSON.stringify({
      jsonrpc: "2.0",
      id: 0,
      method: "subscribe",
      params: { query }
    }));
  }

  setOnListener(listener: ((msg: any) => void) | null) {
    this.listener = listener
  }
}
