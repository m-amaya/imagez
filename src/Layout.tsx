import { FC, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { AuthProvider, ImagesProvider } from "./store";
import { globalStyles, styled } from "./styles";
import tokens from "./tokens";
import { initFirebase, rgba } from "./utils";

const ToastStyled = styled(ToastContainer, {
  ".Toastify__toast": {
    backgroundColor: rgba(tokens.palette.blueDarker, 0.85),
    textStyle: "body",
  },
  ".Toastify__close-button": {
    color: "$pureWhite",
  },
});

const app = initFirebase();

const Layout: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <AuthProvider>
      <ImagesProvider app={app}>
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/imagez'>
                <Route
                  index
                  element={
                    <RequireAuth>
                      <HomePage />
                    </RequireAuth>
                  }
                />
                <Route path='login' element={<LoginPage />} />
              </Route>
            </Routes>
            <ToastStyled position='top-right' autoClose={false} closeOnClick />
          </>
        </BrowserRouter>
      </ImagesProvider>
    </AuthProvider>
  );
};

export default Layout;
