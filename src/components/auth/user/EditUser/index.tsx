import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { Checkbox, FormControlLabel, Grid, Paper, Stack } from "@mui/material";
import { IDistrict } from "../../../../store/district/types";
import Title from "../../../../pages/admin/Dashboard/title";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { ICampaign } from "../../../../store/campaign/types";
import { IDonation } from "../../../../store/donation/types";
import { pink } from "@mui/material/colors";
import { IUser } from "../../../../store/auth/types";

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IUser;
  onSubmit: (e: React.FormEvent) => void;
  checked: any;
};

export default function EditUserComponent(props: Props) {
  const { onChange, state, onSubmit, checked } = props;

  const { username, email } = state;
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>EDIT EXIST USER</Title>

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
            id="username"
            label="Username"
            name="username"
            value={username}
            autoComplete="username"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
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
                onChange={props.onChange}
              />
            }
            label="ACTIVE"
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
