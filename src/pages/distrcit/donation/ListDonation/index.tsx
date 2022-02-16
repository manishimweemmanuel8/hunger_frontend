import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListDistrictComponent from "../../../../components/admin/district/ListDistrict";
import ListCampaignComponent from "../../../../components/District/campaign/ListCampaign";
import ListCampaignDonationComponent from "../../../../components/District/donation/ListDonation";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import { getCampaigns, getCampaignsDistrcit } from "../../../../store/campaign/actions";
import { ICampaign } from "../../../../store/campaign/types";
import { AppState } from "../../../../store/configureStore";
import { getDistricts } from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";
import { getCampaignDonates } from "../../../../store/donation/actions";
import { IDonation } from "../../../../store/donation/types";

type Props = {
  history: any;
  location: any;
};

interface RouteParams {
  id: string;
}

export default function ListCampaignDonation(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();


  const { campaignDonations }: { campaignDonations: IDonation[] } = useSelector(
    (state: AppState) => state.donation
  );
  React.useEffect(() => {
    dispatch(getCampaignDonates(params.id));
  }, []);
  console.log(campaignDonations);
  return (
    <DistrictDashboardLayout>
      <ListCampaignDonationComponent donations={campaignDonations} />
    </DistrictDashboardLayout>
  );
}
