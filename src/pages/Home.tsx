import "react-toastify/dist/ReactToastify.min.css";

import { FC } from "react";
import { ToastContainer } from "react-toastify";

import { Content } from "~/components/content";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { globalStyles, styled } from "~/styles";
import tokens from "~/tokens";
import { rgba } from "~/utils";

const ToastStyled = styled(ToastContainer, {
  ".Toastify__toast": {
    backgroundColor: rgba(tokens.palette.blueDarker, 0.85),
    textStyle: "body",
  },
  ".Toastify__close-button": {
    color: "$pureWhite",
  },
});

const Home: FC = () => {
  globalStyles();

  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <ToastStyled position='top-right' autoClose={false} closeOnClick />
    </div>
  );
};

export default Home;
