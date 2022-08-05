import { FC, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import Spinner from "~/components/Spinner";
import { useImagesContext } from "~/store";
import { styled } from "~/styles";
import UploadToast from "./UploadToast";

const FileInput = styled("input", {
  display: "none",
});

const ButtonContent = styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 8,
  gridAutoFlow: "column",
});

const UploadButton: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [currFilename, setCurrFilename] = useState("");
  const { upload } = useImagesContext();
  const isUploading = upload.status === "LOADING";

  useEffect(() => {
    if (upload.status === "ERROR") {
      toast(`There was an error uploading ${currFilename}.`);
    }
  }, [upload.status]);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef}>
      <FileInput
        id='file-image'
        type='file'
        name='file-image'
        accept='image/*'
        disabled={isUploading}
        onChange={(e) => {
          const fileList = e.currentTarget.files;

          if (fileList && fileList.length) {
            const file = fileList[0];
            setCurrFilename(file.name);
            toast(
              <UploadToast
                filename={file.name}
                onOk={() => upload.trigger(file)}
                onCancel={() => resetForm()}
              />,
              {
                onClose: () => resetForm(),
              },
            );
          }
        }}
      />
      {isUploading ? (
        <ButtonContent>
          Uploading
          <Spinner />
        </ButtonContent>
      ) : (
        <Button kind='primary' as='label' htmlFor='file-image'>
          Upload
        </Button>
      )}
    </form>
  );
};

export default UploadButton;
