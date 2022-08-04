import hexRgb from "hex-rgb";

const rgba = (hex: string, alpha: number) =>
  hexRgb(hex, { alpha, format: "css" });

export default rgba;
