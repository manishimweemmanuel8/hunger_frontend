import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { Grid, Paper, Stack } from "@mui/material";
import Title from "../../../../pages/admin/Dashboard/title";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IFeedback } from "../../../../store/feedback/types";

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IFeedback;
  onSubmit: (e: React.FormEvent) => void;
};

export default function EditFeedbackComponent(props: Props) {
  const { onChange, state, onSubmit } = props;

  const { names, phone, location,feedback } = state;
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>EDIT EXIST FEEDBACK</Title>

        <Box
          component="form"
          onSubmit={onSubmit}
          noValidate
          sx={{ mt: 1 }}
          style={{ margin: "auto", minWidth: 100 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="names"
            label="Names"
            name="names"
            value={names}
            autoComplete="names"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />

<TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            value={phone}
            autoComplete="phone"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />

<TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            value={location}
            autoComplete="location"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="feedback"
            value={feedback}
            label="feedback"
            id="feedback"
            autoComplete="feedback"
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
            <Button variant="contained" color="error" href="/admin/district">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}
