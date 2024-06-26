/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iplace.board.v1";

export interface Board {
  id: number;
  name: string;
  sizeX: number;
  sizeY: number;
  /**
   * uint32 reference_x = 5;
   *  uint32 reference_y = 6;
   */
  creator: string;
  /** uint32 last_slice_id = 9; */
  admin: string;
}

export interface PixelInfo {
  boardId: number;
  /** uint32 slice_id = 2; */
  pixelIndex: number;
  color: number;
  setter: string;
}

function createBaseBoard(): Board {
  return { id: 0, name: "", sizeX: 0, sizeY: 0, creator: "", admin: "" };
}

export const Board = {
  encode(message: Board, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.sizeX !== 0) {
      writer.uint32(24).uint32(message.sizeX);
    }
    if (message.sizeY !== 0) {
      writer.uint32(32).uint32(message.sizeY);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(66).string(message.admin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Board {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sizeX = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sizeY = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.admin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Board {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      sizeX: isSet(object.sizeX) ? globalThis.Number(object.sizeX) : 0,
      sizeY: isSet(object.sizeY) ? globalThis.Number(object.sizeY) : 0,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      admin: isSet(object.admin) ? globalThis.String(object.admin) : "",
    };
  },

  toJSON(message: Board): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sizeX !== 0) {
      obj.sizeX = Math.round(message.sizeX);
    }
    if (message.sizeY !== 0) {
      obj.sizeY = Math.round(message.sizeY);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    return obj;
  },

  create(base?: DeepPartial<Board>): Board {
    return Board.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Board>): Board {
    const message = createBaseBoard();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.sizeX = object.sizeX ?? 0;
    message.sizeY = object.sizeY ?? 0;
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
};

function createBasePixelInfo(): PixelInfo {
  return { boardId: 0, pixelIndex: 0, color: 0, setter: "" };
}

export const PixelInfo = {
  encode(message: PixelInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boardId !== 0) {
      writer.uint32(8).uint32(message.boardId);
    }
    if (message.pixelIndex !== 0) {
      writer.uint32(24).uint32(message.pixelIndex);
    }
    if (message.color !== 0) {
      writer.uint32(32).uint32(message.color);
    }
    if (message.setter !== "") {
      writer.uint32(42).string(message.setter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PixelInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePixelInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.boardId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pixelIndex = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.setter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PixelInfo {
    return {
      boardId: isSet(object.boardId) ? globalThis.Number(object.boardId) : 0,
      pixelIndex: isSet(object.pixelIndex) ? globalThis.Number(object.pixelIndex) : 0,
      color: isSet(object.color) ? globalThis.Number(object.color) : 0,
      setter: isSet(object.setter) ? globalThis.String(object.setter) : "",
    };
  },

  toJSON(message: PixelInfo): unknown {
    const obj: any = {};
    if (message.boardId !== 0) {
      obj.boardId = Math.round(message.boardId);
    }
    if (message.pixelIndex !== 0) {
      obj.pixelIndex = Math.round(message.pixelIndex);
    }
    if (message.color !== 0) {
      obj.color = Math.round(message.color);
    }
    if (message.setter !== "") {
      obj.setter = message.setter;
    }
    return obj;
  },

  create(base?: DeepPartial<PixelInfo>): PixelInfo {
    return PixelInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PixelInfo>): PixelInfo {
    const message = createBasePixelInfo();
    message.boardId = object.boardId ?? 0;
    message.pixelIndex = object.pixelIndex ?? 0;
    message.color = object.color ?? 0;
    message.setter = object.setter ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
