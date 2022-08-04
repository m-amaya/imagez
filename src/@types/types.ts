import type { CSS } from "@stitches/react";
import type { ReactElement } from "react";
import { config } from "~/styles";
import tokens from "~/tokens";

export type ReactChildren = ReactElement | ReactElement[];
export type StitchesCSS = CSS<typeof config>;
export type FontStyleType = keyof typeof tokens.fontSizes;

export interface PropsWithChild {
  children?: ReactElement;
}

export interface PropsWithChildren {
  children?: ReactChildren;
}

export interface CommonProps {
  css?: StitchesCSS;
  className?: string;
  testId?: string;
}
