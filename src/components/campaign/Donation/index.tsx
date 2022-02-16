import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { ILoginParams } from "../../../store/auth/types";
import { Fade, Modal } from "@mui/material";
import { IDonation } from "../../../store/donation/types";
import { ICampaign } from "../../../store/campaign/types";

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IDonation;
  campaign: ICampaign;
  onSubmit: (e: React.FormEvent) => void;
};

export default function DonationComponent(props: Props) {
  const { onChange, state, onSubmit, campaign } = props;


  const { names, email, amount, description, location, phone } =
    state;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          p={1}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            DONATION FORM
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="names"
              label="Full Name"
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
              type="email"
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone number"
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
              type="number"
              required
              fullWidth
              id="amount"
              label="Amount"
              name="amount"
              value={amount}
              autoComplete="amount"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
