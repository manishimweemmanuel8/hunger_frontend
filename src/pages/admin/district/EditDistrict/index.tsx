import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditDistrictComponent from "../../../../components/admin/district/EditDistrict";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { getDistrict, updateDistrict } from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";
import { getService, updateService } from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};


export default function EditDistrict(props: Props) {
  const dispatch = useDispatch();

  const districtReducer = useSelector((state: AppState) => state.district);
  const { district }: { district: IDistrict } =districtReducer;


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


  const [state, setState] = React.useState({
    name: district.name,
    description: district.description,
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
    dispatch(updateDistrict(district.id,data, props.history));
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
      <EditDistrictComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
 
      />
    </AdminDashboardLayout>
  );
}
