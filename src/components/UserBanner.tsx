import { FC } from "react";

import { styled } from "~/styles";
import { useAuthContext } from "~/store";
import Button from "./Button";

const Container = styled("div", {
  backgroundColor: "$blueDarkest",
  display: "flex",
  justifyContent: "flex-end",
  padding: 8,
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
});

const Content = styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 8,
  gridAutoFlow: "column",
});

const UserBanner: FC = () => {
  const { logout, user } = useAuthContext();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Content>
        <div>Hello, {user.displayName}!</div>
        <Button kind='secondary' onClick={() => logout()}>
          Logout
        </Button>
      </Content>
    </Container>
  );
};

export default UserBanner;
