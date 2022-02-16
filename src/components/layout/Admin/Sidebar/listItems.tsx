import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "@mui/material";
import { LocalActivity } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import NavigationIcon from '@mui/icons-material/Navigation';
import PeopleIcon from '@mui/icons-material/People';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <Link href="/admin/about" color="inherit" underline="none">
        <ListItemText primary="About" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DesignServicesIcon />
      </ListItemIcon>
      <Link href="/admin/service" color="inherit" underline="none">
        <ListItemText primary="Service" />
      </Link>{" "}
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <Link href="/admin/contact" color="inherit" underline="none">
        <ListItemText primary="Contact" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NavigationIcon />
      </ListItemIcon>
      <Link href="/admin/district" color="inherit" underline="none">
        <ListItemText primary="District" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="/admin/user" color="inherit" underline="none">
        <ListItemText primary="Users" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
