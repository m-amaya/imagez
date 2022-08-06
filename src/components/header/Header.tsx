import { FC } from "react";

import Wrapper from "~/components/Wrapper";
import { styled } from "~/styles";
import tokens from "~/tokens";

import Search from "./Search";
import UploadButton from "./UploadButton";

const HeaderWrapper = styled(Wrapper, {
  display: "grid",
  gap: 16,
  marginTop: tokens.content.marginTop,
});

const LogoWrapper = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

const H1 = styled("h1", {
  fontWeight: "$bold",
});

const Header: FC = () => {
  return (
    <HeaderWrapper as='header'>
      <LogoWrapper>
        <H1>imagez.</H1>
        <UploadButton />
      </LogoWrapper>
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
