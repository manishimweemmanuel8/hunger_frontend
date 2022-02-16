import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListDistrictComponent from "../../../../components/admin/district/ListDistrict";
import ListCampaignComponent from "../../../../components/District/campaign/ListCampaign";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import DistrictDashboardLayout from "../../../../components/layout/District";
import { getCampaigns, getCampaignsDistrcit } from "../../../../store/campaign/actions";
import { ICampaign } from "../../../../store/campaign/types";
import { AppState } from "../../../../store/configureStore";
import { getDistricts } from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";

type Props = {
  history: any;
  location: any;
};

export default function ListCampaign(props: Props) {
  const dispatch = useDispatch();

  const { campaignsDistrict }: { campaignsDistrict: ICampaign[] } = useSelector(
    (state: AppState) => state.campaign
  );
  React.useEffect(() => {
    dispatch(getCampaignsDistrcit());
  }, []);
  console.log(campaignsDistrict);
  return (
    <DistrictDashboardLayout>
      <ListCampaignComponent campaigns={campaignsDistrict} />
    </DistrictDashboardLayout>
  );
}
