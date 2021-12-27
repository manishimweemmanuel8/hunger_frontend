import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { IState } from "./type";
import Stack from "@mui/material/Stack";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";
import "./style.scss";
import { Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: IState;
  onSubmit: (e: FormEvent) => void;
  handleClose: (event: MouseEvent<HTMLElement>) => void;
  modalState: IModalState;
  itemMessage: string;
  configMenuErrors: IErrors;
};

const AddItem = (props: Props) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    itemMessage,
    configMenuErrors,
  } = props;

  const { status, name, description } = state;

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={itemMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Item"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add ITEM</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="name"
                value={name}
                label="Item name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                name="description"
                required
                value={description}
                label="Description"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

              <Stack spacing={2} direction="row">
                <Button href="/manager/items" color="error" variant="outlined">
                  Cancel
                </Button>
                <Button type="submit" color="primary" variant="outlined">
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

export default AddItem;
