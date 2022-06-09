import React from "react";
import { Route, Switch } from "react-router-dom";
import EditCampaignDonationComponent from "../../components/District/donation/EditDonation";

import AddCampaign from "../../pages/distrcit/campaign/AddCampaign";
import EditCampaign from "../../pages/distrcit/campaign/EditCampaign";
import ListCampaign from "../../pages/distrcit/campaign/ListCampaign";
import UploadImageCampaign from "../../pages/distrcit/campaign/UploadImage";
import DistricttDashboard from "../../pages/distrcit/Dashboard";
import EditDonation from "../../pages/distrcit/donation/EditDonation";
import ListCampaignDonation from "../../pages/distrcit/donation/ListDonation";
import AddFeedback from "../../pages/distrcit/feedback/AddFeedback";
import EditFeedback from "../../pages/distrcit/feedback/EditFeedback";
import ListCampaignFeedback from "../../pages/distrcit/feedback/ListFeedback";

export default function DistrcitRoutes() {
  return (
    <Switch>
      <Route path="/district/dashboard" exact component={DistricttDashboard} />
      <Route path="/district/campaign/create" exact component={AddCampaign} />
      <Route path="/district/campaign" exact component={ListCampaign} />
      <Route path="/district/campaign/:id" exact component={EditCampaign} />
      <Route path="/district/campaign/image/:id" exact component={UploadImageCampaign} />
      <Route path="/district/campaign/donation/:id" exact component={ListCampaignDonation} />
      <Route path="/district/campaign/donation/details/:id" exact component={EditDonation} />
      <Route path="/district/campaign/feedback/:id" exact component={ListCampaignFeedback} />
      <Route path="/district/campaign/feedback/details/:id" exact component={EditFeedback} />
      <Route path="/district/campaign/add/feedback/:id" exact component={AddFeedback} />


    </Switch>
  );
}
