import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    backgroundColor: "white",
    height: "10vh",
    boxShadow: "none", 
    color: "black", 
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  block: {
    flexGrow: 1,
  },
  
}));

export default useStyles;
