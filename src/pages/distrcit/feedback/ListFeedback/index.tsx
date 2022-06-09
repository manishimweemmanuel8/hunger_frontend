import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListCampaignFeedbackComponent from "../../../../components/District/feedback/ListFeedback";
import DistrictDashboardLayout from "../../../../components/layout/District";
import { AppState } from "../../../../store/configureStore";
import { getCampaignFeedbacks } from "../../../../store/feedback/actions";
import { IFeedback } from "../../../../store/feedback/types";

type Props = {
  history: any;
  location: any;
};

interface RouteParams {
  id: string;
}

export default function ListCampaignFeedback(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();


  const { campaignFeedbacks }: { campaignFeedbacks: IFeedback[] } = useSelector(
    (state: AppState) => state.feedback
  );
  React.useEffect(() => {
    dispatch(getCampaignFeedbacks(params.id));
  }, []);
  return (
    <DistrictDashboardLayout>
      <ListCampaignFeedbackComponent feedbacks={campaignFeedbacks} />
    </DistrictDashboardLayout>
  );
}
