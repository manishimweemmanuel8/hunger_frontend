import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#d2435e",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#d2435e",
    },
    "& .MuiOutlinedInput-root": {
  
      "&.Mui-focused fieldset": {
        borderColor: "#d2435e",
      },
    },
  },
})(TextField);


const TextInput = (props: any) => {
  return (

    <CssTextField
      name={props.name}
      variant="standard"
      margin="normal"
      id="standard-basic"
      fullWidth
      autoFocus
      size="small"
      required
      {...props}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e)}
    >
      {props.children}
    </CssTextField>
  );
};

export default TextInput;
