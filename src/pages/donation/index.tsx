import * as React from "react";
import Grid from "@mui/material/Grid";
import Layout from "../../components/layout";
import MainCampaign from "../../components/campaign/mainCampaign";
import CampaignList from "../../components/campaign/CampaignList";
import Services from "../../components/masterData/Service";
import Sidebar from "../../components/masterData/SideBar";
import { IAbout } from "../../store/masterData/about/types";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/configureStore";
import { getAbouts } from "../../store/masterData/about/actions";
import { IContact } from "../../store/masterData/contact/types";
import { getContacts } from "../../store/masterData/contact/actions";
import { IService } from "../../store/masterData/services/types";
import { getServices } from "../../store/masterData/services/actions";
import { ICampaign } from "../../store/campaign/types";
import { getCampaignLatest, getCampaigns } from "../../store/campaign/actions";

export default function Home() {
  const { abouts }: { abouts: IAbout[] } = useSelector(
    (state: AppState) => state.about
  );

  const { contacts }: { contacts: IContact[] } = useSelector(
    (state: AppState) => state.contact
  );

  const { services }: { services: IService[] } = useSelector(
    (state: AppState) => state.service
  );

  const { campaigns }: { campaigns: ICampaign[] } = useSelector(
    (state: AppState) => state.campaign
  );

  const { latest }: { latest: ICampaign } = useSelector(
    (state: AppState) => state.campaign
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAbouts());
    dispatch(getContacts());
    dispatch(getServices());
    dispatch(getCampaigns());
    dispatch(getCampaignLatest());
  }, []);

  return (
    <Layout>
      <MainCampaign campaign={latest} />
      <Grid container spacing={4}>
        {campaigns.map((campaign) => (
          <CampaignList key={campaign.name} campaign={campaign} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Services title="Service" posts={services} />
        <Sidebar abouts={abouts} social={contacts} />
      </Grid>
    </Layout>
  );
}
