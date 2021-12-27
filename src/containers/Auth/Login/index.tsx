import React from "react";
import "./style.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@mui/material/Button";
import { AppState } from "../../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth/actions";
import { CircularProgress } from "@material-ui/core";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  LockOutlined,
} from "@material-ui/icons";
import ModalBox from "../../../components/UI/Modal/MessageAlert";
import TextField from "../../../components/UI/Inputs/TextInput";
import "../../../assets/scss/main.scss";
import { Person } from "@mui/icons-material";
import companyLogo from "../../../assets/images/logo.png";


type Props = {
  history: any;
  location: any;
};

const Login = (props: Props) => {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = authReducer;
  const [isPasswordField, setIsPasswordField] = React.useState(true);
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [authReducer]);

  const [state, setState] = React.useState({
    username: "",
    password: "",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { username, password } = state;
  const data = {
    username,
    password,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(authActions(data, props.history));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Login"} 
      />
      <CssBaseline />
      <form onSubmit={onSubmit}>
        <Grid className="auth-card">
          <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 800 }}>
            <Paper className="paper">
            <div>
                <div>
                  <img src={companyLogo} alt="BigCo Inc. logo" width="150" />
                </div>
              </div>
              <FormControl>
                <TextField
                  name="username"
                  required
                  placeholder="     Username"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(event)
                  }
                  InputProps={{
                    startAdornment: <Person className="txt-icon" />,
                  }}
                />

                <TextField
                  name="password"
                  required
                  placeholder="     Password"
                  type={isPasswordField ? "password" : "text"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(event)
                  }
                  InputProps={{
                    startAdornment: <LockOutlined className="txt-icon" />,
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
                <Button
                  type="submit"
                  variant="contained"
                  className="bt-primary"
                  // color="error"
                >
                  {state.spinner ? <CircularProgress size={25} /> : "login"}
                </Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
