/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Board, PixelInfo } from "./board";

export const protobufPackage = "iplace.board.v1";

export interface QueryGetAllBoardsRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryGetAllBoardsResponse {
  boards: Board[];
  pagination?: PageResponse | undefined;
}

export interface QueryGetBoardRequest {
  id: number;
}

export interface QueryGetBoardResponse {
  board?: Board | undefined;
}

export interface QueryGetPixelInfoRequest {
  boardId: number;
  /** uint32 slice_id = 2; */
  pixelIndex: number;
}

export interface QueryGetPixelInfoResponse {
  pixel?: PixelInfo | undefined;
}

export interface QueryGetPixelsRequest {
  boardId: number;
  /** uint32 slice_id = 2; */
  start: number;
  end: number;
}

export interface QueryGetPixelsResponse {
  pixels: Uint8Array;
}

function createBaseQueryGetAllBoardsRequest(): QueryGetAllBoardsRequest {
  return { pagination: undefined };
}

export const QueryGetAllBoardsRequest = {
  encode(message: QueryGetAllBoardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllBoardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllBoardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllBoardsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllBoardsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetAllBoardsRequest>): QueryGetAllBoardsRequest {
    return QueryGetAllBoardsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetAllBoardsRequest>): QueryGetAllBoardsRequest {
    const message = createBaseQueryGetAllBoardsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllBoardsResponse(): QueryGetAllBoardsResponse {
  return { boards: [], pagination: undefined };
}

export const QueryGetAllBoardsResponse = {
  encode(message: QueryGetAllBoardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.boards) {
      Board.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllBoardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllBoardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boards.push(Board.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllBoardsResponse {
    return {
      boards: globalThis.Array.isArray(object?.boards) ? object.boards.map((e: any) => Board.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllBoardsResponse): unknown {
    const obj: any = {};
    if (message.boards?.length) {
      obj.boards = message.boards.map((e) => Board.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetAllBoardsResponse>): QueryGetAllBoardsResponse {
    return QueryGetAllBoardsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetAllBoardsResponse>): QueryGetAllBoardsResponse {
    const message = createBaseQueryGetAllBoardsResponse();
    message.boards = object.boards?.map((e) => Board.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBoardRequest(): QueryGetBoardRequest {
  return { id: 0 };
}

export const QueryGetBoardRequest = {
  encode(message: QueryGetBoardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBoardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBoardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBoardRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: QueryGetBoardRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetBoardRequest>): QueryGetBoardRequest {
    return QueryGetBoardRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetBoardRequest>): QueryGetBoardRequest {
    const message = createBaseQueryGetBoardRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetBoardResponse(): QueryGetBoardResponse {
  return { board: undefined };
}

export const QueryGetBoardResponse = {
  encode(message: QueryGetBoardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.board !== undefined) {
      Board.encode(message.board, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBoardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBoardResponse();
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

  fromJSON(object: any): QueryGetBoardResponse {
    return { board: isSet(object.board) ? Board.fromJSON(object.board) : undefined };
  },

  toJSON(message: QueryGetBoardResponse): unknown {
    const obj: any = {};
    if (message.board !== undefined) {
      obj.board = Board.toJSON(message.board);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetBoardResponse>): QueryGetBoardResponse {
    return QueryGetBoardResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetBoardResponse>): QueryGetBoardResponse {
    const message = createBaseQueryGetBoardResponse();
    message.board = (object.board !== undefined && object.board !== null) ? Board.fromPartial(object.board) : undefined;
    return message;
  },
};

function createBaseQueryGetPixelInfoRequest(): QueryGetPixelInfoRequest {
  return { boardId: 0, pixelIndex: 0 };
}

export const QueryGetPixelInfoRequest = {
  encode(message: QueryGetPixelInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boardId !== 0) {
      writer.uint32(8).uint32(message.boardId);
    }
    if (message.pixelIndex !== 0) {
      writer.uint32(24).uint32(message.pixelIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPixelInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPixelInfoRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPixelInfoRequest {
    return {
      boardId: isSet(object.boardId) ? globalThis.Number(object.boardId) : 0,
      pixelIndex: isSet(object.pixelIndex) ? globalThis.Number(object.pixelIndex) : 0,
    };
  },

  toJSON(message: QueryGetPixelInfoRequest): unknown {
    const obj: any = {};
    if (message.boardId !== 0) {
      obj.boardId = Math.round(message.boardId);
    }
    if (message.pixelIndex !== 0) {
      obj.pixelIndex = Math.round(message.pixelIndex);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetPixelInfoRequest>): QueryGetPixelInfoRequest {
    return QueryGetPixelInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetPixelInfoRequest>): QueryGetPixelInfoRequest {
    const message = createBaseQueryGetPixelInfoRequest();
    message.boardId = object.boardId ?? 0;
    message.pixelIndex = object.pixelIndex ?? 0;
    return message;
  },
};

function createBaseQueryGetPixelInfoResponse(): QueryGetPixelInfoResponse {
  return { pixel: undefined };
}

export const QueryGetPixelInfoResponse = {
  encode(message: QueryGetPixelInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pixel !== undefined) {
      PixelInfo.encode(message.pixel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPixelInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPixelInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pixel = PixelInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPixelInfoResponse {
    return { pixel: isSet(object.pixel) ? PixelInfo.fromJSON(object.pixel) : undefined };
  },

  toJSON(message: QueryGetPixelInfoResponse): unknown {
    const obj: any = {};
    if (message.pixel !== undefined) {
      obj.pixel = PixelInfo.toJSON(message.pixel);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetPixelInfoResponse>): QueryGetPixelInfoResponse {
    return QueryGetPixelInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetPixelInfoResponse>): QueryGetPixelInfoResponse {
    const message = createBaseQueryGetPixelInfoResponse();
    message.pixel = (object.pixel !== undefined && object.pixel !== null)
      ? PixelInfo.fromPartial(object.pixel)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPixelsRequest(): QueryGetPixelsRequest {
  return { boardId: 0, start: 0, end: 0 };
}

export const QueryGetPixelsRequest = {
  encode(message: QueryGetPixelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boardId !== 0) {
      writer.uint32(8).uint32(message.boardId);
    }
    if (message.start !== 0) {
      writer.uint32(24).uint32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPixelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPixelsRequest();
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

          message.start = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.end = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPixelsRequest {
    return {
      boardId: isSet(object.boardId) ? globalThis.Number(object.boardId) : 0,
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      end: isSet(object.end) ? globalThis.Number(object.end) : 0,
    };
  },

  toJSON(message: QueryGetPixelsRequest): unknown {
    const obj: any = {};
    if (message.boardId !== 0) {
      obj.boardId = Math.round(message.boardId);
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetPixelsRequest>): QueryGetPixelsRequest {
    return QueryGetPixelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetPixelsRequest>): QueryGetPixelsRequest {
    const message = createBaseQueryGetPixelsRequest();
    message.boardId = object.boardId ?? 0;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseQueryGetPixelsResponse(): QueryGetPixelsResponse {
  return { pixels: new Uint8Array(0) };
}

export const QueryGetPixelsResponse = {
  encode(message: QueryGetPixelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pixels.length !== 0) {
      writer.uint32(10).bytes(message.pixels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPixelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPixelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pixels = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPixelsResponse {
    return { pixels: isSet(object.pixels) ? bytesFromBase64(object.pixels) : new Uint8Array(0) };
  },

  toJSON(message: QueryGetPixelsResponse): unknown {
    const obj: any = {};
    if (message.pixels.length !== 0) {
      obj.pixels = base64FromBytes(message.pixels);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetPixelsResponse>): QueryGetPixelsResponse {
    return QueryGetPixelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGetPixelsResponse>): QueryGetPixelsResponse {
    const message = createBaseQueryGetPixelsResponse();
    message.pixels = object.pixels ?? new Uint8Array(0);
    return message;
  },
};

export interface Query {
  GetAllBoards(
    request: DeepPartial<QueryGetAllBoardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetAllBoardsResponse>;
  GetBoard(request: DeepPartial<QueryGetBoardRequest>, metadata?: grpc.Metadata): Promise<QueryGetBoardResponse>;
  /**
   * rpc GetAllSlices(QueryGetAllSlicesRequest) returns (QueryGetAllSlicesResponse) {
   *    option (google.api.http).get = "/iplace/board/{board_id}/slice";
   *  }
   *  rpc GetSlice(QueryGetSliceRequest) returns (QueryGetSliceResponse) {
   *    option (google.api.http).get = "/iplace/board/{board_id}/slice/{slice_id}";
   *  }
   */
  GetPixelInfo(
    request: DeepPartial<QueryGetPixelInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPixelInfoResponse>;
  GetPixels(request: DeepPartial<QueryGetPixelsRequest>, metadata?: grpc.Metadata): Promise<QueryGetPixelsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAllBoards = this.GetAllBoards.bind(this);
    this.GetBoard = this.GetBoard.bind(this);
    this.GetPixelInfo = this.GetPixelInfo.bind(this);
    this.GetPixels = this.GetPixels.bind(this);
  }

  GetAllBoards(
    request: DeepPartial<QueryGetAllBoardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetAllBoardsResponse> {
    return this.rpc.unary(QueryGetAllBoardsDesc, QueryGetAllBoardsRequest.fromPartial(request), metadata);
  }

  GetBoard(request: DeepPartial<QueryGetBoardRequest>, metadata?: grpc.Metadata): Promise<QueryGetBoardResponse> {
    return this.rpc.unary(QueryGetBoardDesc, QueryGetBoardRequest.fromPartial(request), metadata);
  }

  GetPixelInfo(
    request: DeepPartial<QueryGetPixelInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetPixelInfoResponse> {
    return this.rpc.unary(QueryGetPixelInfoDesc, QueryGetPixelInfoRequest.fromPartial(request), metadata);
  }

  GetPixels(request: DeepPartial<QueryGetPixelsRequest>, metadata?: grpc.Metadata): Promise<QueryGetPixelsResponse> {
    return this.rpc.unary(QueryGetPixelsDesc, QueryGetPixelsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "iplace.board.v1.Query" };

export const QueryGetAllBoardsDesc: UnaryMethodDefinitionish = {
  methodName: "GetAllBoards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetAllBoardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetAllBoardsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryGetBoardDesc: UnaryMethodDefinitionish = {
  methodName: "GetBoard",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetBoardRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetBoardResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryGetPixelInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GetPixelInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPixelInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetPixelInfoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryGetPixelsDesc: UnaryMethodDefinitionish = {
  methodName: "GetPixels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPixelsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetPixelsResponse.decode(data);
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
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
