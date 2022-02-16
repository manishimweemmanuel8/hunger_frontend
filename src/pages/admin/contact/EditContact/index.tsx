import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditContactComponent from "../../../../components/admin/masterDate/contact/EditContact";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import {
  getContact,
  updateContact,
} from "../../../../store/masterData/contact/actions";
import { IContact } from "../../../../store/masterData/contact/types";
import {
  getService,
  updateService,
} from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};

export default function EditContact(props: Props) {
  const dispatch = useDispatch();

  const contactReducer = useSelector((state: AppState) => state.contact);
  const { contact }: { contact: IContact } = contactReducer;

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
    name: contact.name,
    value: contact.value,
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
    dispatch(updateContact(contact.id, data, props.history));
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
        title={"Edit Contact"}
      />
      <EditContactComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminDashboardLayout>
  );
}
