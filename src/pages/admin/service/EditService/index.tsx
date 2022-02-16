import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { getService, updateService } from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};


export default function EditService(props: Props) {
  const dispatch = useDispatch();

  const serviceReducer = useSelector((state: AppState) => state.service);
  const { service }: { service: IService } =serviceReducer;
 

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = serviceReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [serviceReducer]);


  const [state, setState] = React.useState({
    name: service.name,
    description: service.description,
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
    dispatch(updateService(service.id,data, props.history));
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
      <EditServiceComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminDashboardLayout>
  );
}
