"use client"

import styles from "./page.module.css";
import Board from "@/components/Board";
import { useCallback, useEffect, useState } from "react";
import { ColorPicker, ColorService, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useWallet } from "@initia/react-wallet-widget";
import { TxBody } from "@initia/initia.proto/cosmos/tx/v1beta1/tx";
import { useTx } from "@/lib/util/tx";
import { MsgSetPixel } from "@/proto/iplace/board/v1/tx";
import { hexColorToNumber } from "@/lib/util/color";

interface Pixel {
  boardId: number
  index: number
  x: number
  y: number
  displayX: number
  displayY: number
  colorHex: string
}

function PixelEdit(props: { pixel?: Pixel, onClose?: () => void }) {
  const { address } = useWallet()
  const { postTx } = useTx()

  const [color, setColor] = useColor(props.pixel?.colorHex ?? "#000");

  useEffect(() => setColor(ColorService.convert("hex", props.pixel?.colorHex ?? "#000")), [props.pixel?.colorHex, setColor]);

  const onConfirm = useCallback(() => {
    const pixel = props.pixel

    if (pixel == null) {
      return
    }

    const txBody = TxBody.fromPartial({
      messages: [
        {
          typeUrl: "/iplace.board.v1.MsgSetPixel",
          value: MsgSetPixel.encode(
            MsgSetPixel.fromPartial({
              boardId: pixel.boardId,
              pixelIndex: pixel.index,
              color: hexColorToNumber(color.hex),
              setter: address,
            })
          ).finish()
        }
      ]
    })

    postTx(txBody, 1000000)

  }, [props.pixel, color, address, postTx])

  return <div className={styles.editor} style={{
    left: props.pixel?.displayX,
    top: props.pixel?.displayY,
    display: props.pixel == null ? "none" : "block"
  }}>
    <ColorPicker color={color} onChange={setColor} hideAlpha={true} hideInput={["rgb", "hsv"]}/>
    <button type="submit" className={styles.submit} onClick={onConfirm}>Confirm</button>
    <button type="button" className={styles.submit} onClick={props.onClose}>Close</button>
  </div>
}

export default function Home() {
  const [boardId, setBoardId] = useState(1);
  const [selectedPixel, setSelectedPixel] = useState<Pixel>()

  return (
    <main className={styles.main}>
      <Board
        wrapperClassName={styles.canvasWrapper}
        contentClassName={styles.canvas}
        boardId={boardId}
        onClickPixel={(index, x, y, displayX, displayY, colorHex) => setSelectedPixel({
          boardId: boardId,
          index,
          x,
          y,
          displayX,
          displayY,
          colorHex
        })}/>
      <PixelEdit pixel={selectedPixel} onClose={() => setSelectedPixel(undefined)}/>
    </main>
  );
}
