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
import { ISubscription } from "../../../store/subscription/types";

const theme = createTheme();

type Props = {
  onChangeS: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stateS: ISubscription;
  campaign: ICampaign;
  onSubmitS: (e: React.FormEvent) => void;
};

export default function SubscriptionComponent(props: Props) {
  const { onChangeS, stateS, onSubmitS, campaign } = props;


  const { emailS} =
    stateS;
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
            SUBSCRIPTION FORM
          </Typography>
          <Box component="form" onSubmit={onSubmitS} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              type="emailS"
              id="emailS"
              label="Email Address"
              name="emailS"
              value={emailS}
              autoComplete="emailS"
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeS(e)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
