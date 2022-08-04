import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": [
    "url('https://unpkg.com/modern-css-reset/dist/reset.min.css')",
    "url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap')",
  ],
  body: {
    backgroundColor: "$blueDarkest",
    textStyle: "body",
  },
  h1: {
    textStyle: "h1",
  },
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;
