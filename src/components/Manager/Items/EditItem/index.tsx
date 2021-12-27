import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { IImageState } from "./type";
import Stack from "@mui/material/Stack";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";
import "./style.scss";
import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { IItem } from "../../../../store/manager/item/types";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { pink } from "@mui/material/colors";


type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

const Input = styled("input")({
  display: "none",
});

const EditItem = (props: any) => {
  const {
    onChange,
    setItemState,
    itemState,
    onSubmit,
    handleClose,
    modalState,
    itemMessage,
    configMenuErrors,
    checked,
    item,
  } = props;
  setItemState(item);
  console.log(item);

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={itemMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Update Item"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3}style={{ margin: "auto", minWidth: 1200 }} >
          <Paper className="paper">
            <h3>UPDATE ITEM</h3>
            <br />
            <br />

            <form onSubmit={onSubmit}>
              <TextInput
                name="name"
                value={itemState.name}
                label="Item name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                name="description"
                required
                value={itemState.description}
                label="Description"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    checked={checked}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                  />
                }
                label="Status"
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

export default EditItem;
