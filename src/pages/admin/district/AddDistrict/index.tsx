import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddDistrictComponent from "../../../../components/admin/district/AddDistrict";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { createDistrict } from "../../../../store/district/actions";

type Props = {
  history: any;
  location: any;
};

export default function AddDistrict(props: Props) {
  const dispatch = useDispatch();

  const districtReducer = useSelector((state: AppState) => state.district);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = districtReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [districtReducer]);

  console.log(errors);

  const [state, setState] = React.useState({
    name: "",
    description: "",
    email:"",
    password:"",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { name, description,email,password } = state;
  const data = {
    name,
    description,
    email,
    password,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch((createDistrict(data, props.history)));
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
        title={"Add District"}
      />
      <AddDistrictComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </AdminDashboardLayout>
  );
}
