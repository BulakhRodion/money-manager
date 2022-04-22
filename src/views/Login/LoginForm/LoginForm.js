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
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const navigateUser = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const inputs = [
    {
        id: 'loginEmail',
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        value: formValues.email,
    }, {
        id: 'loginPassword',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        value: formValues.password,
    }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
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

            {/*<InputField*/}
            {/*    id="loginEmail"*/}
            {/*    type="email"*/}
            {/*    placeholder="E-mail"*/}
            {/*    value={formValues.email}*/}
            {/*    onChange={e => setFormValues(e.target.value)}/>*/}
            {/*<InputField*/}
            {/*    id="loginPassword"*/}
            {/*    type="password"*/}
            {/*    placeholder="Password"*/}
            {/*    value={formValues.password}*/}
            {/*    onChange={e => setFormValues(e.target.value)} />*/}
            <Button type="submit">Submit</Button>
            {inputError && <div className="alert alert-danger">Login details are incorrect</div>}
        </FormContainer>
    );
}

export default LoginForm;