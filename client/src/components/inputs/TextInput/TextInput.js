import React from "react";
import {TextField} from "@material-ui/core";

const TextInput = ({className, ...rest}) => {
    return <div className={className}>
        <TextField fullWidth {...rest}/>
    </div>
}

export default TextInput;