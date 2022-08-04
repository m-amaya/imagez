import { styled } from "~/styles";
import tokens from "~/tokens";

const Wrapper = styled("div", {
  padding: 16,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: tokens.content.maxWidth,
  width: "100%",
});

export default Wrapper;
