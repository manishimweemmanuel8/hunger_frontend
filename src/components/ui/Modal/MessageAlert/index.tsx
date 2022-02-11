import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

type IModalState = {
  open: boolean;
};

type Props = {
  state: IModalState;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  message: string;
  error: string;
  title: string;
};

export default function ModalBox(props: Props) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={props.state.open}
        onClose={(e: React.MouseEvent<HTMLButtonElement>) =>
          props.handleClose(e)
        }
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.error ? <ErrorOutline /> : <CheckCircleOutline />}
            {(props.message && props.message) || (props.error && props.error)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              props.handleClose(e)
            }
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
