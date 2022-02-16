import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddAboutComponent from "../../../../components/admin/masterDate/about/AddAbout";
import EditAboutComponent from "../../../../components/admin/masterDate/about/EditAbout";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import {
  createAbout,
  getAbout,
  updateAbout,
} from "../../../../store/masterData/about/actions";
import { IAbout } from "../../../../store/masterData/about/types";

type Props = {
  history: any;
  location: any;
};
interface RouteParams {
  id: string;
}

export default function EditAbout(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();

 
  const aboutReducer = useSelector((state: AppState) => state.about);
  const { about }: { about: IAbout } = aboutReducer;

  console.log(about);
  

  const [state, setState] = React.useState({
    name: about.name,
    description: about.description,
    spinner: false,
  });
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
    dispatch(updateAbout(params.id, data, props.history));
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
        title={"Edit About us"}
      />
      <EditAboutComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        setState={setState}
        about={about}
      />
    </AdminDashboardLayout>
  );
}
