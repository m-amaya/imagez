/**
 * Global Namespace
 * Types declared here are for internal use only.
 * They will not be included in the build.
 */

import type { FC, SVGAttributes } from "react";

export {};

declare global {
  declare module "*.svg" {
    export const ReactComponent: FC<SVGAttributes<SVGElement>>;
    const content: FC<SVGAttributes<SVGElement>>;
    export default content;
  }
}
