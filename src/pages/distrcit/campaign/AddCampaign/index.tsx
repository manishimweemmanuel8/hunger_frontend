import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddDistrictComponent from "../../../../components/admin/district/AddDistrict";
import AddCampaignComponent from "../../../../components/District/campaign/AddCampaign";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { createCampaign } from "../../../../store/campaign/actions";
import { AppState } from "../../../../store/configureStore";
import { createDistrict } from "../../../../store/district/actions";

type Props = {
  history: any;
  location: any;
};

export default function AddCampaign(props: Props) {
  const dispatch = useDispatch();

  const campaignReducer = useSelector((state: AppState) => state.campaign);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = campaignReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [campaignReducer]);

  console.log(errors);

  const [state, setState] = React.useState({
    name: "",
    description: "",
    quality:"",
    quantity:"",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { name, description,quality,quantity } = state;
  const data = {
    name,
    description,
    quality,
    quantity,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch((createCampaign(data, props.history)));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };
  return (
    <DistrictDashboardLayout>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Add Campaign"}
      />
      <AddCampaignComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </DistrictDashboardLayout>
  );
}
