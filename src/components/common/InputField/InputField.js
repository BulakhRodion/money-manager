import React from 'react';
import {InputFieldLabel, InputFieldWrapper, InputIcon, InputPlaceholder} from "./InputField.styles";

function InputField(props) {
    // const [isValue, setIsValue] = useState(false);

 /*   const handleChange = (e) => {
        console.log(e);
        if (e.length > 0) {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
        props.onChange(e);
        console.log(isValue)
    }; */

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