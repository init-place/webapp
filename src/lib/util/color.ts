export function hexColorToNumber(hex: string): number {
  let normalized = hex;

  if (normalized.startsWith("#")) {
    normalized = normalized.substring(1);
  }

  if (normalized.length == 6) {
    normalized = normalized + "FF"
  }

  return parseInt(normalized, 16);
}
