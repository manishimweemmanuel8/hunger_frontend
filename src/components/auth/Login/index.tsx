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
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
);

const theme = createTheme();

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: ILoginParams;
  onSubmit: (e: React.FormEvent) => void;
};

export default function LoginComponent(props: Props) {
  const { onChange, state, onSubmit } = props;

  const [isPasswordField, setIsPasswordField] = React.useState(true);

  const { username, password } = state;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Grid item xs={12}>
          <Paper sx={{ p: 4, display: "flex", flexDirection: "column" }}>
            <Root sx={{ width: 1500, maxWidth: "100%" }}>
              <CssBaseline />
              <Box
                p={2}
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  LOGIN FORM
                </Typography>
                <Box
                  component="form"
                  onSubmit={onSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    autoComplete="Username"
                    autoFocus
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e)
                    }
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={password}
                    label="Password"
                    // type="password"
                    id="password"
                    autoComplete="current-password"
                    type={isPasswordField ? "password" : "text"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(event)
                    }
                    InputProps={{
                      // startAdornment: <LockOutlined className="txt-icon" />,
                      endAdornment: isPasswordField ? (
                        <VisibilityOutlined
                          className="txt-icon-active"
                          onClick={() => setIsPasswordField(!isPasswordField)}
                        />
                      ) : (
                        <VisibilityOffOutlined
                          className="txt-icon-active"
                          onClick={() => setIsPasswordField(!isPasswordField)}
                        />
                      ),
                    }}
                  />
                  {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    LOGIN
                  </Button>
                </Box>
              </Box>
            </Root>
          </Paper>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
