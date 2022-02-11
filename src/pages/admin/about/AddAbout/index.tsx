import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAboutComponent from "../../../../components/admin/masterDate/admin/AddAbout";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { createAbout } from "../../../../store/masterData/about/actions";

type Props = {
  history: any;
  location: any;
};

export default function AddAbout(props: Props) {
  const dispatch = useDispatch();

  const aboutReducer = useSelector((state: AppState) => state.about);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = aboutReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [aboutReducer]);

  console.log(errors);

  const [state, setState] = React.useState({
    name: "",
    description: "",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { name, description } = state;
  const data = {
    name,
    description,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch((createAbout(data, props.history)));
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
        title={"Add About us"}
      />
      <AddAboutComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminDashboardLayout>
  );
}
