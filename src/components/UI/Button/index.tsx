import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buttons from '@material-ui/core/Button';
 


const Button = (props:any) => {
     const { label, onClick, type } = props;
    return (
        type == "primary" ?
            <Buttons className="btn btn-primary" variant="contained">{label}</Buttons> :
            <Buttons className="btn btn-default" variant="outlined">{label}</Buttons>
    );
};

export default Button;
