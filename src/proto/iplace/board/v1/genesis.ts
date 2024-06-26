/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Board, PixelInfo } from "./board";
import { Params } from "./params";

export const protobufPackage = "iplace.board.v1";

export interface GenesisState {
  params?: Params | undefined;
  boards: Board[];
  /** repeated BoardSlice slices = 3 [ (gogoproto.nullable) = false ]; */
  pixels: PixelInfo[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, boards: [], pixels: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.boards) {
      Board.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pixels) {
      PixelInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.boards.push(Board.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pixels.push(PixelInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      boards: globalThis.Array.isArray(object?.boards) ? object.boards.map((e: any) => Board.fromJSON(e)) : [],
      pixels: globalThis.Array.isArray(object?.pixels) ? object.pixels.map((e: any) => PixelInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.boards?.length) {
      obj.boards = message.boards.map((e) => Board.toJSON(e));
    }
    if (message.pixels?.length) {
      obj.pixels = message.pixels.map((e) => PixelInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.boards = object.boards?.map((e) => Board.fromPartial(e)) || [];
    message.pixels = object.pixels?.map((e) => PixelInfo.fromPartial(e)) || [];
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
