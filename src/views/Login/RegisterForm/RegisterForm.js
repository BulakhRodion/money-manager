import React, {useContext, useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import {FormContainer} from "./RegisterForm.styles";
import InputField from "@components/common/InputField/InputField";
import {AuthContext} from "../../../context/AuthContext";
import Button from "@components/common/Button/Button";


function RegisterForm() {
    const [inputError, setInputError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigateUser = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        setInputError(false);

        if (password !== confirmPassword) {
            setInputError(true);
            setErrorMessage('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: 'LOGIN', payload: user})
                navigateUser('/')
            })
            .catch((error) => {
                if(error.code === 'auth/email-already-in-use') {
                    setErrorMessage('Email already in use')
                }
                setInputError(true);
            });
    }

    return (
        <FormContainer onSubmit={handleRegister}>
            <InputField
                id="registerEmail"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            <InputField
                id="registerPassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <InputField
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            <Button type="submit">Submit</Button>
            {inputError && <div className="alert alert-danger">{errorMessage}</div>}
            {/*//TODO: add error component*/}
        </FormContainer>
    );
}

export default RegisterForm;