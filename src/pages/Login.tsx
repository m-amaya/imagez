import { FC, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import Spinner from "~/components/Spinner";
import { useAuthContext } from "~/store";
import { styled } from "~/styles";

const Main = styled("main", {
  display: "flex",
  height: "100vh",
  overflow: "hidden",
  placeContent: "center",
  placeItems: "center",
  width: "100%",
});

const Section = styled("section", {
  display: "grid",
  gap: 16,
  padding: 16,
  maxWidth: 350,
  textAlign: "center",
  width: "100%",
});

const ButtonContent = styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 8,
  gridAutoFlow: "column",
});

const Login: FC = () => {
  const { isLoggedIn, login, loginStatus } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/imagez");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (loginStatus === "ERROR") {
      toast("There was an error logging in. Please try again.");
    }
  }, [loginStatus]);

  return (
    <Main>
      <Section>
        <h1>imagez.</h1>
        <Button kind='primary' onClick={() => login()}>
          <ButtonContent>
            <FaGoogle />
            <span>Continue with Google</span>
            {loginStatus === "LOADING" && <Spinner />}
          </ButtonContent>
        </Button>
      </Section>
    </Main>
  );
};

export default Login;
