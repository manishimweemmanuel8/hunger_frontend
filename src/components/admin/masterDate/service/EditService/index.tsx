import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { Grid, Paper, Stack } from "@mui/material";
import Title from "../../../../../pages/admin/Dashboard/title";
import { IService } from "../../../../../store/masterData/services/types";

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IService;
  onSubmit: (e: React.FormEvent) => void;
};

export default function EditServiceComponent(props: Props) {
  const { onChange, state, onSubmit } = props;

  const { name, description } = state;
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>EDIT EXIST SERVICE</Title>

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
            name="description"
            value={description}
            label="Description"
            id="description"
            autoComplete="description"
            rows={4}
            multiline
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
            <Button variant="contained" color="error" href="/admin/service">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}
