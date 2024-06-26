import { IplaceClient } from "@/lib/client";
import { bytesToBase64, bytesToHex, numberToUint8Array } from "@/lib/util/binary";
import { RpcWebSocketClient } from "@/lib/client/rpc/client";

export type OnClickListener = (
  index: number,
  x: number,
  y: number,
  displayX: number,
  displayY: number,
  colorHex: string,
) => void

export class Board {

  public pixelSize: number = 1
  public readonly canvasSizeX = this.sizeX * this.pixelSize
  public readonly canvasSizeY = this.sizeY * this.pixelSize

  private pixels: Uint8ClampedArray = new Uint8ClampedArray()

  private canvas: HTMLCanvasElement | null = null
  private canvas2d: CanvasRenderingContext2D | null = null
  private eventListeners: Map<string, any[]> = new Map()

  private onClickHandler: OnClickListener | null = null

  constructor(
    readonly id: number,
    readonly name: string,
    readonly sizeX: number,
    readonly sizeY: number,
    readonly creator: string,
    readonly admin: string,
  ) {
  }

  async loadPixels(start?: number, end?: number) {
    this.pixels = await IplaceClient.board.getPixels(this.id, start ?? 0, end ?? this.sizeX * this.sizeY)
  }

  setPixel(index: number, color: number) {
    const colorData = numberToUint8Array(color)

    this.pixels[index * 4] = colorData[3]
    this.pixels[index * 4 + 1] = colorData[2]
    this.pixels[index * 4 + 2] = colorData[1]
    this.pixels[index * 4 + 3] = colorData[0]
  }

  enableAutoUpdate(): RpcWebSocketClient {
    return IplaceClient.board.subscribeBoard(this.id, (boardId, pixelIndex, color) => {
      if (this.id !== boardId) {
        return
      }

      this.setPixel(pixelIndex, color)
      this.drawSlice(pixelIndex, pixelIndex + 1)
      // this.draw()
    })
  }

  attachCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas2d = canvas.getContext("2d")

    if (this.canvas2d == null) {
      throw Error("Your browser does not support 2d canvas")
    }

    this.canvas2d.imageSmoothingEnabled = false

    if (this.pixels.length != 0) {
      this.draw()
    }

    let isMoving = false
    this.handleEvent("mousemove", (e) => isMoving = true)
    this.handleEvent("mousedown", (e) => isMoving = false)
    this.handleEvent("mouseup", (e) => {
      if (!isMoving) this.onClick(e)
    })
  }

  detachCanvas() {
    this.clearEventListeners()
  }

  draw() {
    if (this.canvas2d == null) {
      throw Error("Must attach a canvas before draw")
    }

    const imageData = new ImageData(this.pixels, this.sizeX, this.sizeY)
    this.canvas2d.putImageData(imageData, 0, 0)
  }

  getPixelColorHex(x: number, y: number): string {
    const i = x * 4 + y * this.sizeX * 4

    // alpha ignored
    return `#${bytesToHex(this.pixels.slice(i, i + 3))}`
  }

  setOnClickPixel(handler: OnClickListener | null) {
    this.onClickHandler = handler
  }

  drawSlice(start: number, end: number) {
    if (this.canvas2d == null) {
      throw Error("Must attach a canvas before draw")
    }

    if (end * 4 > this.pixels.length) {
      throw Error("out of range")
    }

    for (let i = start * 4; i < end * 4; i += 4) {
      const imageData = this.canvas2d.createImageData(this.pixelSize, this.pixelSize)

      for (let p = 0; p < this.pixelSize; p++) {
        imageData.data[0 + p] = this.pixels[i]
        imageData.data[1 + p] = this.pixels[i+1]
        imageData.data[2 + p] = this.pixels[i+2]
        imageData.data[3 + p] = this.pixels[i+3]
      }
      this.canvas2d.putImageData(
        imageData,
        (i / 4) % this.sizeX * this.pixelSize,
        (i / 4) / this.sizeX * this.pixelSize,
        )
      // this.canvas2d.fillStyle = `rgba(${this.pixels[i]}, ${this.pixels[i + 1]}, ${this.pixels[i + 2]}, ${this.pixels[i + 3] / 255})`
      // this.canvas2d.fillRect((i / 4) % this.sizeX * this.pixelSize, (i / 4) / this.sizeX * this.pixelSize, this.pixelSize, this.pixelSize)
    }
  }

  private canvasXToPixelX(x: number): number {
    const canvasWidth = this.canvas?.getBoundingClientRect().width ?? 1

    return Math.trunc(x * (this.sizeX / canvasWidth))
  }

  private canvasYToPixelY(y: number): number {
    const canvasHeight = this.canvas?.getBoundingClientRect().height ?? 1

    return Math.trunc(y * (this.sizeY / canvasHeight))
  }

  private positionToIndex(x: number, y: number): number {
    return y * this.sizeX + x
  }

  private onClick(e: MouseEvent) {
    if (this.canvas == null) {
      return
    }

    const elementPosition = this.canvas.getBoundingClientRect()
    const x = this.canvasXToPixelX(e.x - elementPosition.x)
    const y = this.canvasYToPixelY(e.y - elementPosition.y)
    const displayX = e.clientX
    const displayY = e.clientY

    console.log("onClickPixel", x, y)
    console.log("onClickDisplay", displayX, displayY)
    this.onClickHandler?.call(null, this.positionToIndex(x, y), x, y, displayX, displayY, this.getPixelColorHex(x, y))
  }

  private handleEvent<K extends keyof HTMLElementEventMap>(type: K, onEvent: (e: HTMLElementEventMap[K]) => void) {
    if (this.canvas == null) {
      throw Error("Must attach a canvas before handle event")
    }

    const listener = (e: HTMLElementEventMap[K]) => onEvent(e)

    const listeners = this.eventListeners.get(type)
    if (listeners != null) {
      listeners.push(listener)
    } else {
      this.eventListeners.set(type, [listener])
    }
    this.canvas.addEventListener(type, listener)
  }

  private clearEventListeners() {
    if (this.canvas == null) {
      throw Error("Must attach a canvas before clear event listeners")
    }

    const canvas = this.canvas

    this.eventListeners.forEach((v, k) => {
      v.forEach((l) => canvas.removeEventListener(k, l))
    })
  }
}
