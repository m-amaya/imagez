import { styled } from "~/styles";

const Button = styled("button", {
  textStyle: "body",
  alignItems: "center",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  display: "inline-flex",
  fontWeight: "$bold",
  height: 40,
  outlineWidth: 0,
  paddingLeft: 12,
  paddingRight: 12,
  smoothTransition: ["background-color", "outline-width"],
  variants: {
    kind: {
      primary: {
        backgroundColor: "$pink",
        "&:hover": {
          backgroundColor: "$pinkDarker",
        },
        "&:active": {
          backgroundColor: "$pinkDarkest",
        },
        "&:focus": {
          focusRing: "pink",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        fontWeight: "$regular",
        textDecorationColor: "transparent",
        textDecorationLine: "underline",
        "&:hover": {
          textDecorationColor: "$pureWhite",
        },
      },
    },
  },
});

export default Button;
