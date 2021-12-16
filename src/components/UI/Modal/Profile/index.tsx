import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Person, PowerSettingsNew } from "@material-ui/icons";
import { Box, Avatar } from "@material-ui/core";
import profile from "../../../../assets/images/profile.png";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#d2435e",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

type Props = {
  anchorEl: any;
  handleClick: any;
  handleClose: any;
  signOut: any;
};

export default function CustomizedMenus(props: Props) {
  const { anchorEl, handleClick, handleClose, signOut } = props;

  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <Box p={1}>
              <Avatar onClick={handleClick} alt="Quick" src={profile} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={localStorage.getItem("USERNAME")}
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PowerSettingsNew fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={signOut} primary="Sign out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
