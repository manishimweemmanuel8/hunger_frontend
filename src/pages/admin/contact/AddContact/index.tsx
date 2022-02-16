import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddContactComponent from "../../../../components/admin/masterDate/contact/AddContact";
import AddServiceComponent from "../../../../components/admin/masterDate/service/AddService";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { createContact } from "../../../../store/masterData/contact/actions";
import { createService } from "../../../../store/masterData/services/actions";

type Props = {
  history: any;
  location: any;
};

export default function AddContact(props: Props) {
  const dispatch = useDispatch();

  const contactReducer = useSelector((state: AppState) => state.contact);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = contactReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [contactReducer]);


  const [state, setState] = React.useState({
    name: "",
    value: "",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { name, value } = state;
  const data = {
    name,
    value,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch((createContact(data, props.history)));
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
        title={"Add Service"}
      />
      <AddContactComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminDashboardLayout>
  );
}
