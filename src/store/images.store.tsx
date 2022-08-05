import type { FirebaseApp } from "firebase/app";
import { getStorage, listAll, ref, StorageReference } from "firebase/storage";
import { createContext, FC, useContext, useState } from "react";

import type { ReactChildren, StatusType } from "~/types";

interface ImagesStore {
  ref: StorageReference;
  list: {
    status: StatusType;
    data: StorageReference[];
    get: () => void;
  };
  upload: {
    status: StatusType;
    trigger: (image: File) => void;
  };
}

const ImagesContext = createContext({} as ImagesStore);

export const ImagesProvider: FC<{
  app: FirebaseApp;
  children?: ReactChildren;
}> = ({ app, ...props }) => {
  const storage = getStorage(app);
  const imagesRef = ref(storage, "uploads");
  const [imagesList, setImagesList] = useState<StorageReference[]>([]);
  const [listStatus, setListStatus] = useState<StatusType>("IDLE");
  const [uploadStatus, setUploadStatus] = useState<StatusType>("IDLE");

  const getList = () => {
    setListStatus("LOADING");
    listAll(imagesRef)
      .then((res) => {
        setImagesList(res.items);
        setListStatus("SUCCESS");
      })
      .catch(() => {
        setListStatus("ERROR");
      });
  };

  const upload = (image: File) => {
    console.log("upload image:", image);
  };

  return (
    <ImagesContext.Provider
      value={{
        ref: imagesRef,
        list: {
          status: listStatus,
          data: imagesList,
          get: getList,
        },
        upload: {
          status: uploadStatus,
          trigger: upload,
        },
      }}
      {...props}
    />
  );
};

export const useImagesContext = () => useContext(ImagesContext);
