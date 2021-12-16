import React, { Fragment, MouseEvent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../styles.scss";
import { ErrorOutline, CheckCircleOutline } from "@material-ui/icons";

type IModalState = {
  open: boolean;
};

type Props = {
  state: IModalState;
  handleClose: (event: MouseEvent<HTMLButtonElement>) => void;
  message: string;
  error: string;
  title: string;
};

export default function ModalBox(props: Props) {
  return (
    <Fragment>
      <Dialog
        fullWidth={true}
        maxWidth='xs'
        open={props.state.open}
        onClose={(e: MouseEvent<HTMLButtonElement>) => props.handleClose(e)}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle
          id='max-width-dialog-title'
          className='dialog-content-title'
        >
          {props.title}
        </DialogTitle>
        <DialogContent className='dialog-content'>
          <DialogContentText className='dialog-content-text'>
            {props.error ? (
              <ErrorOutline className='orange-color icon' />
            ) : (
              <CheckCircleOutline className='orange-color icon' />
            )}
            {(props.message && props.message) || (props.error && props.error)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>) => props.handleClose(e)}
            className='orange-color'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
