import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditDistrictComponent from "../../../../components/admin/district/EditDistrict";
import EditServiceComponent from "../../../../components/admin/masterDate/service/EditService";
import EditCampaignComponent from "../../../../components/District/campaign/EditCampaign";
import EditCampaignDonationComponent from "../../../../components/District/donation/EditDonation";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { updateCampaign } from "../../../../store/campaign/actions";
import { ICampaign } from "../../../../store/campaign/types";
import { AppState } from "../../../../store/configureStore";
import {
  getDistrict,
  updateDistrict,
} from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";
import { getDonate, updateDonate } from "../../../../store/donation/actions";
import { IDonation } from "../../../../store/donation/types";
import {
  getService,
  updateService,
} from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};

export default function EditDonation(props: Props) {
  const dispatch = useDispatch();

  const donationReducer = useSelector((state: AppState) => state.donation);
  const { donation }: { donation: IDonation } = donationReducer;


  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = donationReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [donationReducer]);

  console.log(donation);

  const [state, setState] = React.useState({
    amount: donation.amount,
    quantity: donation.quantity,
    names: donation.names,
    received: donation.received,
    spinner: false,
  });
  const [checked, setChecked] = React.useState(donation.received);

  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const {  amount,quantity, names, received } = state;
  const data = {
    amount,
    quantity,
    names,
    received: checked,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    setChecked(event.target.checked);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(
      updateDonate(donation.id, donation.campaign?.id, data, props.history)
    );
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
        title={"Edit Donation"}
      />
      <EditCampaignDonationComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        checked={checked}
      />
    </DistrictDashboardLayout>
  );
}
