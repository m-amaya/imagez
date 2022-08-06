import { FC } from "react";

import Wrapper from "~/components/Wrapper";
import { useImagesContext } from "~/store";
import { genKey } from "~/utils";
import Image from "./Image";
import ImageGrid from "./ImageGrid";

const Content: FC = () => {
  const {
    list: { dataFiltered },
  } = useImagesContext();

  return (
    <Wrapper as='main'>
      <ImageGrid>
        {dataFiltered.map((image) => (
          <Image key={genKey("image")} name={image.name} />
        ))}
      </ImageGrid>
    </Wrapper>
  );
};

export default Content;
