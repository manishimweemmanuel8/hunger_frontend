import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../../../components/auth/Login";
import Layout from "../../../components/layout";
import ModalBox from "../../../components/ui/Modal/MessageAlert";
import { authActions } from "../../../store/auth/actions";
import { AppState } from "../../../store/configureStore";

type Props = {
  history: any;
  location: any;
};

export default function Login(props: Props) {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = authReducer;
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
    <Layout>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Login"}
      />
      <LoginComponent onChange={onChange} state={state} onSubmit={onSubmit} />
    </Layout>
  );
}
