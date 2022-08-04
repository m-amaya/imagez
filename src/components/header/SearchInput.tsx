import { FC } from "react";
import { FaSearch } from "react-icons/fa";

import { styled } from "~/styles";
import tokens from "~/tokens";
import rgba from "~/utils/rgba";

const InputWrapper = styled("div", {
  backgroundColor: rgba(tokens.palette.blueDarker, 0.95),
  borderRadius: 8,
  height: 50,
  position: "relative",
  width: "100%",
});

const SearchIcon = styled(FaSearch, {
  color: "$blue",
  fontSize: 26,
  left: 16,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
});

const Input = styled("input", {
  textStyle: "bodyMd",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "inherit",
  height: "inherit",
  outlineWidth: 0,
  paddingLeft: 16 + 26 + 16,
  paddingRight: 16,
  width: "inherit",
  "&::placeholder": {
    color: "$blueLighter",
  },
});

const SearchInput: FC = () => {
  return (
    <InputWrapper>
      <SearchIcon />
      <Input placeholder='Search...' />
    </InputWrapper>
  );
};

export default SearchInput;
