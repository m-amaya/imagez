import { CgSpinnerTwoAlt } from "react-icons/cg";

import { keyframes, styled } from "~/styles";

const spin = keyframes({
  "50%": {
    transform: "rotate(100deg)",
  },
  "89%": {
    transform: "rotate(260deg)",
  },
  "100%": {
    transform: "rotate(361deg)",
  },
});

const Spinner = styled(CgSpinnerTwoAlt, {
  animationDuration: "700ms",
  animationIterationCount: "infinite",
  animationName: spin as any,
  animationTimingFunction: "linear",
});

export default Spinner;
