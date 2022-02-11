import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { IContact } from "../../../store/masterData/contact/types";
import { IAbout } from "../../../store/masterData/about/types";

interface SidebarProps {
  social: IContact[];
  abouts: IAbout[];
  // description:string
}

export default function Sidebar(props: SidebarProps) {
  const { social, abouts } = props;

  // console.log(name);

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {`Abouts`}
        </Typography>
        {abouts.map((data) => (
          <Typography>{data.description}</Typography>
        ))}
      </Paper>

      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Contact
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.id}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <span>
              {network.name}:{network.value}
            </span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
