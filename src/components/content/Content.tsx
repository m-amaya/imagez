import { FC } from "react";

import Wrapper from "~/components/Wrapper";
import { useImagesContext } from "~/store";
import { styled } from "~/styles";
import { genKey } from "~/utils";
import Image from "./Image";
import ImageGrid from "./ImageGrid";

const InfoBanner = styled("div", {
  color: "$blueLighter",
  paddingBottom: 16,
  textAlign: "right",
});

const Empty = styled("div", {
  paddingBottom: 32,
  paddingTop: 32,
  textAlign: "center",
});

const Content: FC = () => {
  const {
    list: { dataFiltered },
  } = useImagesContext();
  const numPhotos = dataFiltered.length;

  return (
    <Wrapper as='main' css={{ paddingTop: 24 }}>
      <InfoBanner>
        {numPhotos} photo{numPhotos === 1 ? "" : "s"}
      </InfoBanner>
      {numPhotos ? (
        <ImageGrid>
          {dataFiltered.map((image) => (
            <Image key={genKey("image")} name={image.name} />
          ))}
        </ImageGrid>
      ) : (
        <Empty>
          What?! No photos?!
          <br />
          Upload some to see them here.
        </Empty>
      )}
    </Wrapper>
  );
};

export default Content;
