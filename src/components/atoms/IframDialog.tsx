import { Dialog, Paper } from "@mui/material";
import { FC } from "react";

type IframDialogPropsType = {
  src: string;
  open: boolean;
  handleClose: any;
}

const IframDialog: FC<IframDialogPropsType> = ({
  src,
  open,
  handleClose,
}) => {
  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}
      PaperProps={{ sx: { overflow: 'hidden' } }}>
      <iframe allow="camera;microphone" src={src} width={'100%'} height={700} style={{ border: 0 }} />
    </Dialog>
  )
}

export default IframDialog;
