import React from "react";
import useStyles from "./style";
import "./style.scss";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { Box, Avatar } from "@material-ui/core";
import profile from "../../assets/images/profile.png";
import Hidden from "@material-ui/core/Hidden";
import UserProfile from "../UI/Modal/Profile";
import { SignOut } from "../../store/auth/actions";

interface IItem {
  label: string;
  link: string;
  color?: string;
}

type IProps = {
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  menuItems: IItem[];
};

const Navbar = (props: IProps) => {
  const { menuItems } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () => {
    SignOut();
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <div className={classes.block}>
            <Box display="flex" p={1}>
              <Box p={1} flexGrow={1}>
              </Box>
              <Box p={1} flexGrow={1}>
                <Hidden smDown>
                  <nav className="menu-top">
                    <ul>
                      {menuItems &&
                        menuItems.map((item: IItem) => {
                          const cl = item.color;
                          return (
                            <li key={item.label}>
                              <Link to={item.link} style={{ color: cl }}>
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </nav>
                </Hidden>
              </Box>

              <Hidden smDown>
                {/* <Box p={1}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <Notifications />
                    </Badge>
                  </IconButton>
                </Box> */}
                <Box p={1}>
                  <Avatar onClick={handleClick} alt="Quick" src={profile} />
                </Box>

                <UserProfile
                  anchorEl={anchorEl}
                  handleClick={handleClick}
                  handleClose={handleClose}
                  signOut={signOut}
                />
              </Hidden>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
