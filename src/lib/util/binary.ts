export function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function base64ToUint8ClampedArray(base64: string): Uint8ClampedArray {
  const binaryString = atob(base64);
  const bytes = new Uint8ClampedArray(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function bytesToHex(bytes: Uint8ClampedArray): string {
  return Array.from(bytes, function (byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}

export function bytesToBase64(bytes: Uint8Array | Uint8ClampedArray): string {
  return btoa(Array.from(bytes, (x) => String.fromCodePoint(x)).join(""));
}

export function numberToUint8Array(num: number) {
  let arr = new Uint8Array(8);

  for (let i = 0; i < 8; i++) {
    arr[i] = num % 256;
    num = Math.floor(num / 256);
  }

  return arr;
}
