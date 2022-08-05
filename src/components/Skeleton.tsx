import { keyframes, styled } from "~/styles";
import tokens from "~/tokens";
import { rgba } from "~/utils";

const pulse = keyframes({
  "0%": {
    backgroundColor: rgba(tokens.palette.blueDarker, 0.1),
  },
  "50%": {
    backgroundColor: "$blueDarker",
  },
  "100%": {
    backgroundColor: rgba(tokens.palette.blueDarker, 0.1),
  },
});

const Skeleton = styled("div", {
  animationDuration: "2s",
  animationIterationCount: "infinite",
  animationName: pulse as any,
  animationTimingFunction: "ease-in-out",
  backgroundColor: "$blueDarker",
});

export default Skeleton;
