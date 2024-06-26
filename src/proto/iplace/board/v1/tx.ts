/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Board } from "./board";

export const protobufPackage = "iplace.board.v1";

export interface MsgCreateBoard {
  name: string;
  sizeX: number;
  sizeY: number;
  creator: string;
}

export interface MsgCreateBoardResponse {
  board?: Board | undefined;
}

export interface MsgSetPixel {
  boardId: number;
  /** uint32 slice_id = 2; */
  pixelIndex: number;
  color: number;
  setter: string;
}

export interface MsgSetPixelResponse {
}

function createBaseMsgCreateBoard(): MsgCreateBoard {
  return { name: "", sizeX: 0, sizeY: 0, creator: "" };
}

export const MsgCreateBoard = {
  encode(message: MsgCreateBoard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBoard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBoard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBoard {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      sizeX: isSet(object.sizeX) ? globalThis.Number(object.sizeX) : 0,
      sizeY: isSet(object.sizeY) ? globalThis.Number(object.sizeY) : 0,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreateBoard): unknown {
    const obj: any = {};
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
    return obj;
  },

  create(base?: DeepPartial<MsgCreateBoard>): MsgCreateBoard {
    return MsgCreateBoard.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateBoard>): MsgCreateBoard {
    const message = createBaseMsgCreateBoard();
    message.name = object.name ?? "";
    message.sizeX = object.sizeX ?? 0;
    message.sizeY = object.sizeY ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateBoardResponse(): MsgCreateBoardResponse {
  return { board: undefined };
}

export const MsgCreateBoardResponse = {
  encode(message: MsgCreateBoardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.board !== undefined) {
      Board.encode(message.board, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBoardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBoardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.board = Board.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBoardResponse {
    return { board: isSet(object.board) ? Board.fromJSON(object.board) : undefined };
  },

  toJSON(message: MsgCreateBoardResponse): unknown {
    const obj: any = {};
    if (message.board !== undefined) {
      obj.board = Board.toJSON(message.board);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateBoardResponse>): MsgCreateBoardResponse {
    return MsgCreateBoardResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateBoardResponse>): MsgCreateBoardResponse {
    const message = createBaseMsgCreateBoardResponse();
    message.board = (object.board !== undefined && object.board !== null) ? Board.fromPartial(object.board) : undefined;
    return message;
  },
};

function createBaseMsgSetPixel(): MsgSetPixel {
  return { boardId: 0, pixelIndex: 0, color: 0, setter: "" };
}

export const MsgSetPixel = {
  encode(message: MsgSetPixel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPixel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPixel();
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

  fromJSON(object: any): MsgSetPixel {
    return {
      boardId: isSet(object.boardId) ? globalThis.Number(object.boardId) : 0,
      pixelIndex: isSet(object.pixelIndex) ? globalThis.Number(object.pixelIndex) : 0,
      color: isSet(object.color) ? globalThis.Number(object.color) : 0,
      setter: isSet(object.setter) ? globalThis.String(object.setter) : "",
    };
  },

  toJSON(message: MsgSetPixel): unknown {
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

  create(base?: DeepPartial<MsgSetPixel>): MsgSetPixel {
    return MsgSetPixel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSetPixel>): MsgSetPixel {
    const message = createBaseMsgSetPixel();
    message.boardId = object.boardId ?? 0;
    message.pixelIndex = object.pixelIndex ?? 0;
    message.color = object.color ?? 0;
    message.setter = object.setter ?? "";
    return message;
  },
};

function createBaseMsgSetPixelResponse(): MsgSetPixelResponse {
  return {};
}

export const MsgSetPixelResponse = {
  encode(_: MsgSetPixelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPixelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPixelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetPixelResponse {
    return {};
  },

  toJSON(_: MsgSetPixelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetPixelResponse>): MsgSetPixelResponse {
    return MsgSetPixelResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgSetPixelResponse>): MsgSetPixelResponse {
    const message = createBaseMsgSetPixelResponse();
    return message;
  },
};

export interface Msg {
  CreateBoard(request: DeepPartial<MsgCreateBoard>, metadata?: grpc.Metadata): Promise<MsgCreateBoardResponse>;
  SetPixel(request: DeepPartial<MsgSetPixel>, metadata?: grpc.Metadata): Promise<MsgSetPixelResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBoard = this.CreateBoard.bind(this);
    this.SetPixel = this.SetPixel.bind(this);
  }

  CreateBoard(request: DeepPartial<MsgCreateBoard>, metadata?: grpc.Metadata): Promise<MsgCreateBoardResponse> {
    return this.rpc.unary(MsgCreateBoardDesc, MsgCreateBoard.fromPartial(request), metadata);
  }

  SetPixel(request: DeepPartial<MsgSetPixel>, metadata?: grpc.Metadata): Promise<MsgSetPixelResponse> {
    return this.rpc.unary(MsgSetPixelDesc, MsgSetPixel.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "iplace.board.v1.Msg" };

export const MsgCreateBoardDesc: UnaryMethodDefinitionish = {
  methodName: "CreateBoard",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateBoard.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateBoardResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgSetPixelDesc: UnaryMethodDefinitionish = {
  methodName: "SetPixel",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetPixel.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSetPixelResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
