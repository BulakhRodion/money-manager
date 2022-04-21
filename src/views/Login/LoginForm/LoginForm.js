import React, {useContext, useState} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
import {FormContainer} from "./LoginForm.styles";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../../context/AuthContext";
import InputField from "@components/common/InputField/InputField";
import Button from "@components/common/Button/Button";

function LoginForm() {
    const [inputError, setInputError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateUser = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: 'LOGIN', payload: user})
                navigateUser('/')
            })
            .catch((error) => {
                setInputError(true);
                console.log(error.message)
            });
    }

    return (
        <FormContainer onSubmit={handleLogin}>
            <InputField
                id="loginEmail"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            <InputField
                id="loginPassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <Button type="submit" className="btn btn-primary">Submit</Button>
            {inputError && <div className="alert alert-danger">Login details are incorrect</div>}
        </FormContainer>
    );
}

export default LoginForm;