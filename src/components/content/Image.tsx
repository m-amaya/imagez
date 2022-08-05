import { getDownloadURL, ref } from "firebase/storage";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Skeleton from "~/components/Skeleton";
import { useImagesContext } from "~/store";
import { styled } from "~/styles";

const ImageStyled = styled("img", {
  borderRadius: 8,
});

const Image: FC<{ name?: string }> = ({ name = "" }) => {
  const { imagesRef } = useImagesContext();
  const [srcUrl, setSrcUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(true);

  useEffect(() => {
    getDownloadURL(ref(imagesRef, name))
      .then((url) => {
        setSrcUrl(url);
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error(error);
        toast(`There was a problem loading ${name}`);
      });
  }, []);

  if (isDownloading) {
    return <Skeleton css={{ borderRadius: 8, height: 200, width: "100%" }} />;
  }

  return <ImageStyled src={srcUrl} />;
};

export default Image;
