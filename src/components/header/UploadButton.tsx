import { HTMLAttributes, FC } from "react";

import { styled } from "~/styles";

const Button = styled("button", {
  textStyle: "body",
  backgroundColor: "$pink",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: "$bold",
  height: 40,
  outlineWidth: 0,
  paddingLeft: 12,
  paddingRight: 12,
  smoothTransition: ["background-color", "outline-width"],
  "&:hover": {
    backgroundColor: "$pinkDarker",
  },
  "&:active": {
    backgroundColor: "$pinkDarkest",
  },
  "&:focus": {
    focusRing: "pink",
  },
});

const UploadButton: FC<HTMLAttributes<HTMLButtonElement>> = (attrs) => {
  return <Button {...attrs}>Upload</Button>;
};

export default UploadButton;
