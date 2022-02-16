import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserComponent from "../../../../components/auth/user/EditUser";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { updateUser } from "../../../../store/auth/actions";
import { IUser } from "../../../../store/auth/types";
import { AppState } from "../../../../store/configureStore";

type Props = {
  history: any;
  location: any;
};

export default function EditUser(props: Props) {
  const dispatch = useDispatch();

  const authReducer = useSelector((state: AppState) => state.auth);
  const { user }: { user: IUser } = authReducer;

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
    username: user.username,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    spinner: false,
  });
  const [checked, setChecked] = React.useState(user.isActive);

  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { username, email, isActive, role } = state;
  const data = {
    username,
    email,
    isActive: checked,
    role,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(updateUser(user.id, data, props.history));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };
  return (
    <AdminDashboardLayout>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Edit Service"}
      />
      <EditUserComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
      />
    </AdminDashboardLayout>
  );
}
