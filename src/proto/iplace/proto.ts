import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateBoard, MsgSetPixel } from "@/proto/iplace/board/v1/tx";
import { registryTypes } from "@initia/utils";

interface Message {
  msg: GeneratedType
  aminoType: string
}

// prettier-ignore
export const messages: Record<string, Message> = {
  /* iplace board */
  "/iplace.board.v1.MsgSetPixel": { msg: MsgSetPixel, aminoType: "iplace/MsgSetPixel" },
  "/iplace.board.v1.MsgCreateBoard": { msg: MsgCreateBoard, aminoType: "iplace/MsgCreateBoard" },
}

export const iplaceRegistryTypes: ReadonlyArray<[string, GeneratedType]> = Object.entries(messages)
  .filter(([, { msg }]) => msg)
  .map(([typeUrl, { msg }]) => [typeUrl, msg!])

export function registerProtoRegistry() {
  registryTypes.push(["/iplace.board.v1.MsgSetPixel", MsgSetPixel])
  // registryTypes.push(...iplaceRegistryTypes)
}
