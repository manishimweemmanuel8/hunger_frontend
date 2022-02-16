import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditDistrictComponent from "../../../../components/admin/district/EditDistrict";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import EditCampaignComponent from "../../../../components/District/campaign/EditCampaign";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import {
  getCampaign,
  updateCampaign,
} from "../../../../store/campaign/actions";
import { ICampaign } from "../../../../store/campaign/types";
import { AppState } from "../../../../store/configureStore";
import {
  getDistrict,
  updateDistrict,
} from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";
import {
  getService,
  updateService,
} from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};

export default function EditCampaign(props: Props) {
  const dispatch = useDispatch();

  const campaignReducer = useSelector((state: AppState) => state.campaign);
  const { campaign }: { campaign: ICampaign } = campaignReducer;

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
  console.log(campaign);

  const [state, setState] = React.useState({
    name: campaign.name,
    description: campaign.description,
    quality: campaign.quality,
    quantity: campaign.quantity,
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { name, description, quality, quantity } = state;
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
    dispatch(updateCampaign(campaign.id, data, props.history));
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
        title={"Edit Campaign"}
      />
      <EditCampaignComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </DistrictDashboardLayout>
  );
}
