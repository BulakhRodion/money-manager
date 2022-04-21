import React from 'react';
import {ButtonStyled} from "./Button.styles";

function Button(props) {
    return (
        <ButtonStyled {...props} />
    );
}

export default Button;