import { FC, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useImagesContext } from "~/store";
import { styled } from "~/styles";
import tokens from "~/tokens";
import { genKey, rgba, useClickOutside } from "~/utils";

const Wrapper = styled("div", {
  position: "relative",
});

const InputWrapper = styled("div", {
  backgroundColor: rgba(tokens.palette.blueDarker, 0.95),
  borderRadius: 8,
  height: 50,
  position: "relative",
  width: "100%",
  variants: {
    showMenu: {
      true: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
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

const List = styled("div", {
  backgroundColor: rgba(tokens.palette.blueDarker, 0.95),
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  borderTop: "1px solid $blueDarkest",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
  zIndex: "$dialog",
});

const ListItem = styled("button", {
  backgroundColor: "transparent",
  border: 0,
  color: "$pureWhite",
  cursor: "pointer",
  height: 50,
  padding: "0 16px",
  textAlign: "left",
  "&:hover": {
    backgroundColor: "$blueLighter",
  },
  "&:last-child": {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

const ListEmptyItem = styled("div", {
  alignItems: "center",
  color: "$blueLighter",
  display: "flex",
  height: 50,
  padding: "0 16px",
});

const Search: FC = () => {
  const ref = useRef(null);
  const {
    list: { dataFiltered, filter },
  } = useImagesContext();
  const [inputValue, setInputValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    filter(inputValue);
  }, [inputValue]);

  useClickOutside(ref, {
    onClick: () => setShowMenu(false),
  });

  return (
    <Wrapper ref={ref}>
      <InputWrapper showMenu={showMenu}>
        <SearchIcon />
        <Input
          placeholder='Search...'
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onFocus={() => setShowMenu(true)}
          value={inputValue}
        />
      </InputWrapper>
      {showMenu && (
        <List>
          {dataFiltered.length ? (
            dataFiltered.map((image) => (
              <ListItem
                key={genKey("opt")}
                onClick={() => setInputValue(image.name)}
              >
                {image.name}
              </ListItem>
            ))
          ) : (
            <ListEmptyItem>No search results found.</ListEmptyItem>
          )}
        </List>
      )}
    </Wrapper>
  );
};

export default Search;
