import { FC, useRef } from "react";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import { styled } from "~/styles";
import UploadToast from "./UploadToast";

const FileInput = styled("input", {
  display: "none",
});

const UploadButton: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

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
        onChange={(e) => {
          const fileList = e.currentTarget.files;

          if (fileList && fileList.length) {
            const file = fileList[0];
            toast(
              <UploadToast filename={file.name} onCancel={() => resetForm()} />,
              {
                onClose: () => resetForm(),
              },
            );
          }
        }}
      />
      <Button kind='primary' as='label' htmlFor='file-image'>
        Upload
      </Button>
    </form>
  );
};

export default UploadButton;
