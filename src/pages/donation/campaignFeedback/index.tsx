import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListFeedbackComponent from "../../../components/donner/ListFeedback";
import Layout from "../../../components/layout";
import { AppState } from "../../../store/configureStore";
import { getCampaignFeedbacks, getFeedbacks } from "../../../store/feedback/actions";
import { IFeedback } from "../../../store/feedback/types";

type Props = {
  history: any;
  location: any;
};

interface RouteParams {
  id: string;
}

export default function CampaingFeedbacks(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();


  const { campaignFeedbacks }: { campaignFeedbacks: IFeedback[] } = useSelector(
    (state: AppState) => state.feedback
  );
  React.useEffect(() => {
    dispatch(getCampaignFeedbacks(params.id));
  }, []);
  return (
    <Layout>
      <ListFeedbackComponent feedbacks={campaignFeedbacks} />
    </Layout>
  );
}
