import { useEffect, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { IplaceClient } from "@/lib/client";
import { Board as BoardType, OnClickListener } from "@/lib/type/board"

export default function Board(props: {
  wrapperClassName?: string,
  contentClassName?: string,
  boardId: number,
  onClickPixel?: OnClickListener,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [board, setBoard] = useState<BoardType>();

  useEffect(() => {
    IplaceClient.board.getBoard(props.boardId).then((board) => setBoard(board))
  }, [props.boardId]);

  useEffect(() => {
    if (board == null) {
      return
    }

    const canvas = canvasRef.current
    if (canvas == null) {
      return
    }

    board.attachCanvas(canvas)
    board.loadPixels().then(() => board.draw())
    const websocket = board.enableAutoUpdate()

    return () => {
      websocket.disconnect()
      board.detachCanvas()
    }
  }, [board]);

  useEffect(() => {
    if (board == null || props.onClickPixel == null) {
      return
    }

    board.setOnClickPixel(props.onClickPixel)

    return () => board.setOnClickPixel(null)
  }, [board, props.onClickPixel])

  return <TransformWrapper
    initialScale={12}
    maxScale={32}
    minScale={1}
    wheel={{ smoothStep: 0.01 }}>
    <TransformComponent wrapperClass={props.wrapperClassName} contentClass={props.contentClassName}>
      <canvas ref={canvasRef} width={board?.canvasSizeX} height={board?.canvasSizeY}
              style={{ imageRendering: "pixelated", margin: "6px", backgroundColor: "#f0f0f0" }}/>
    </TransformComponent>
  </TransformWrapper>
}
