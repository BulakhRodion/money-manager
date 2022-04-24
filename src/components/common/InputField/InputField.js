import React from 'react';
import {InputFieldLabel, InputFieldWrapper, InputIcon, InputPlaceholder} from "./InputField.styles";

function InputField(props) {

    return (
        <InputFieldWrapper>
            {
                props.label &&
                <InputFieldLabel htmlFor={props.id}>{props.label}</InputFieldLabel>
            }
            <InputPlaceholder {...props}/>
            {
                props.icon &&
                <InputIcon><img src={props.icon} alt="input icon" /></InputIcon>
            }
        </InputFieldWrapper>
    );
}

export default InputField;