import { FC } from "react";
import { FaCode, FaHeart } from "react-icons/fa";

import Wrapper from "~/components/Wrapper";
import { styled } from "~/styles";

const Content = styled("div", {
  alignItems: "center",
  color: "$blueLighter",
  display: "inline-grid",
  gap: 6,
  gridAutoFlow: "column",
});

const Footer: FC = () => {
  return (
    <Wrapper
      as='footer'
      css={{
        borderTop: "1px solid $blueDarker",
        marginBottom: 80,
        textAlign: "right",
      }}
    >
      <Content>
        <FaCode /> with <FaHeart /> by mamaya
      </Content>
    </Wrapper>
  );
};

export default Footer;
