import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "5vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5>Copyright &#169; {new Date().getFullYear()}</h5>
    </div>
  );
}
