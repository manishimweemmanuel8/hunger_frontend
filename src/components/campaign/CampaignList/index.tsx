import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ICampaign } from "../../../store/campaign/types";
import defaultImage from "../../../assets/images/logo192.png";

interface CampaignProps {
  campaign: ICampaign;
}

export default function CampaignList(props: CampaignProps) {
  const { campaign } = props;

  const image = `http://localhost:3001/api/v1/campaign/image/${campaign.image}`;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ height: 200, display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {campaign.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {campaign.createdDate.substring(0, 10)}
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                position: "relative",
                overflow: "auto",
                maxHeight: 70,
              }}
            >
              {campaign.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              height: 200,
              display: { xs: "none", sm: "block" },
            }}
            image={campaign.image ? image : defaultImage}
            alt={campaign.image}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
