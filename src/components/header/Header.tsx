import { FC } from "react";

import Wrapper from "~/components/Wrapper";
import { styled } from "~/styles";
import tokens from "~/tokens";

import SearchInput from "./SearchInput";
import UploadButton from "./UploadButton";

const HeaderWrapper = styled(Wrapper, {
  display: "grid",
  gap: 16,
  marginTop: tokens.content.marginTop,
});

const LogoWrapper = styled("div", {
  alignContent: "flex-end",
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
      <SearchInput />
    </HeaderWrapper>
  );
};

export default Header;
