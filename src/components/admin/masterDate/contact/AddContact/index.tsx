import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { IAbout } from "../../../../../store/masterData/about/types";
import { Grid, Paper, Stack } from "@mui/material";
import Title from "../../../../../pages/admin/Dashboard/title";
import { IContact } from "../../../../../store/masterData/contact/types";

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IContact;
  onSubmit: (e: React.FormEvent) => void;
};

export default function AddContactComponent(props: Props) {
  const { onChange, state, onSubmit } = props;

  const { name, value } = state;
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>ADD NEW CONTACT</Title>

        <Box
          component="form"
          onSubmit={onSubmit}
          noValidate
          sx={{ mt: 1 }}
          style={{ margin: "auto", minWidth: 200 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            value={name}
            autoComplete="name"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="value"
            value={value}
            label="Value"
            id="value"
            autoComplete="value"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />
         
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button variant="contained" color="error"  href="/admin/contact" >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}
