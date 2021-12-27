import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { IImageState } from "./type";
import Stack from "@mui/material/Stack";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";
import "./style.scss";
import { Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { IItem } from "../../../../store/manager/item/types";
import { styled } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';


type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: null;
  onSubmit: (e: FormEvent) => void;
  handleClose: (event: MouseEvent<HTMLElement>) => void;
  modalState: IModalState;
  itemMessage: string;
  configMenuErrors: IErrors;
};

const Input = styled("input")({
  display: "none",
});

const UploadImageCompanent = (props: Props) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    itemMessage,
    configMenuErrors,
  } = props;

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={itemMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Upload Image"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>UPLOAD ITEM PICTURE</h3>
            <br />
            <br />

            <form onSubmit={onSubmit}>
              <Stack spacing={2} direction="row">
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    name="file"
                    // value={file}
                    onChange={onChange}
                    required
                  />
                  <Button variant="outlined" color="error" component="span">
                    Upload picture
                  </Button>
                </label>
                <Button type="submit" color="primary" variant="outlined" endIcon={<SendIcon />}>
                  Submit
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadImageCompanent;
