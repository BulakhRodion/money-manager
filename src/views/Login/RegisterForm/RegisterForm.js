import React, {useContext, useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import {FormContainer} from "./RegisterForm.styles";
import InputField from "@components/common/InputField/InputField";
import {AuthContext} from "../../../context/AuthContext";
import Button from "@components/common/Button/Button";
import {REGISTER_INPUTS} from "../../../utils/helpers/constants";
import {showToast} from "../../../utils/helpers/showToast";


function RegisterForm() {
    const [list, setList] = useState([]);
    let propsContainer = null

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigateUser = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const inputs = [...REGISTER_INPUTS]

    const handleRegister = (e) => {
        e.preventDefault();

        if (formValues.password !== formValues.confirmPassword) {
            showToast('error', list, setList, propsContainer, "Passwords do not match")
            return;
        }

        createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: 'LOGIN', payload: user})
                navigateUser('/')
                showToast('success', list, setList, propsContainer, "Successfully registered!")
                // TODO: MOVE TOAST TO DASHBOARD
            })
            .catch((error) => {
                console.log(error)
                if(error.code === 'auth/email-already-in-use') {
                    showToast('error', list, setList, propsContainer, "Email already in use")
                } else {
                    showToast('error', list, setList, propsContainer, "Something went wrong")
                }
            });
    }

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <FormContainer onSubmit={handleRegister}>
            {
            inputs.map((input) => (
                <InputField
                    key={input.id} {...input} value={formValues[input.name]} onChange={handleOnChange}
                />
            ))
            }
            <Button type="submit">Submit</Button>
        </FormContainer>
    );
}

export default RegisterForm;