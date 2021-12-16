import {
    makeStyles,
    Theme,
    createStyles,
  } from "@material-ui/core";
  
export  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "95vh",
    },
    container: {
      width: "95%",
      margin: "auto",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    papers: {
      minHeight: `calc(95vh - 25vh)`,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginBottom: 10,
    },
  })
);