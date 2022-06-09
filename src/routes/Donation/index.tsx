import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/donation";
import CampaingFeedbacks from "../../pages/donation/campaignFeedback";
import ListFeedbacks from "../../pages/donation/ListFeedback";

export default function DonationRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beneficiaries/feedback" exact component={ListFeedbacks} />
      <Route path="/campaign/beneficiaries/feedback/:id" exact component={CampaingFeedbacks} />
    </Switch>
  );
}
