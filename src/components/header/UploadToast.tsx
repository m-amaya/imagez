import { FC, MouseEventHandler } from "react";

import { styled } from "~/styles";
import Button from "../Button";

const Toast = styled("div", {
  display: "grid",
  gap: 16,
});

const Actions = styled("div", {
  display: "grid",
  gap: 8,
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(2, min-content)",
  justifyContent: "right",
});

const UploadToast: FC<{
  filename?: string;
  onOk?: MouseEventHandler<HTMLButtonElement>;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}> = ({ filename = "", onOk, onCancel }) => {
  return (
    <Toast>
      <p>
        Do you want to upload <b>{filename}</b>?
      </p>
      <Actions>
        <Button kind='secondary' onClick={onCancel}>
          Cancel
        </Button>
        <Button kind='primary' onClick={onOk}>
          Ok
        </Button>
      </Actions>
    </Toast>
  );
};

export default UploadToast;
