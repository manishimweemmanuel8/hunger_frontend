import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditDistrictComponent from "../../../../components/admin/district/EditDistrict";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import EditCampaignComponent from "../../../../components/District/campaign/EditCampaign";
import UploadImageCampaignComponent from "../../../../components/District/campaign/UploadImage";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import {
  getCampaign,
  updateCampaign,
  uploadImage,
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
interface RouteParams {
  id: string;
}

export default function UploadImageCampaign(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();

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

  const [state, setState] = React.useState({
    file: "",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { file } = state;
  const data = {
    file,
  };
  const onChange = (e: any) => {
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append("file", e.target.files[0], e.target.files[0].name);

    setState(e.target.files[0]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    const file = state;
    // formData.append('file',state);
    console.log(state);

    dispatch(uploadImage(params.id, file, props.history));
    setModalState({ ...modalState, open: true });
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
        title={"Upload Campaign Image"}
      />
      <UploadImageCampaignComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </DistrictDashboardLayout>
  );
}
