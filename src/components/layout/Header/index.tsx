import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Stack } from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Button size="small">Subscribe</Button> */}

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link href="/" underline="none">
            {title}
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>

        <Button variant="outlined" size="small" href="/beneficiaries/feedback">
         BENEFICIARIES FEEDBACK
        </Button>
        <Button variant="outlined" size="small" href="/login">
          LOGIN HERE
        </Button>
        </Stack>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {/* {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))} */}
      </Toolbar>
    </React.Fragment>
  );
}
