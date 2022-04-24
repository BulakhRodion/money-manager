import React, {useContext, useState} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import {FormContainer} from "./LoginForm.styles";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../../context/AuthContext/AuthContext";
import InputField from "@components/common/InputField/InputField";
import Button from "@components/common/Button/Button";
import {LOGIN_INPUTS} from "../../../utils/helpers/constants";
import Toast from "../../../components/common/Toast/Toast";
import {showToast} from "../../../utils/helpers/showToast";

function LoginForm() {
    const [list, setList] = useState([]);
    let propsContainer = null

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const navigateUser = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const inputs = [...LOGIN_INPUTS]

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: 'LOGIN', payload: user})
                navigateUser('/')
            })
            .catch((error) => {
                console.log(error);
                showToast('error', list, setList, propsContainer, "Invalid email or password")
            });
    }

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <FormContainer onSubmit={handleLogin}>
            {
                inputs.map((input) => (
                    <InputField
                        key={input.id} {...input} value={formValues[input.name]} onChange={handleOnChange}
                    />
                ))
            }
            <Button type="submit">Submit</Button>
            <Toast toastList={list}/>
        </FormContainer>
    );
}

export default LoginForm;