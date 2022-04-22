import React, {useState} from 'react';
import {
    ColumnHalf,
    FlexAlignCenter,
    FormContainer,
    FormTitle,
    FormText,
    FormLink,
    WelcomeSubtitle,
    WelcomeTitle,
    WelcomeUI, MainImg
} from "./Welcome.styles";
import RegisterForm from "../Login/RegisterForm/RegisterForm";
import LoginForm from "../Login/LoginForm/LoginForm";
import {ImgWelcome} from "../../assets/images/images";



function Welcome() {

    const [isRegistered, setIsRegistered] = useState(false);

    const switchForms =() => {
        setIsRegistered(!isRegistered);
    }

    return (
        <WelcomeUI>
            <FlexAlignCenter>
                <ColumnHalf>
                {/* TODO: add text animation and background with image*/}
                    <WelcomeTitle> Fast <span> & </span> Digital</WelcomeTitle>
                    <WelcomeSubtitle>solution to manage your finances</WelcomeSubtitle>
                    <MainImg src={ImgWelcome} alt="Welcome to our site!"/>
                </ColumnHalf>
                <ColumnHalf>
                    <FormContainer>
                        {isRegistered ? <FormTitle>Create Account</FormTitle> : <FormTitle>Hello again!</FormTitle>  }
                        {isRegistered ?
                            <FormText>
                                Already have an account? <FormLink onClick={switchForms}>Sign in</FormLink>
                            </FormText>
                            :
                            <FormText>
                                Still not registered? <FormLink onClick={switchForms}>Sign up</FormLink>
                            </FormText>
                        }
                        {isRegistered ?  <RegisterForm/> : <LoginForm/>}
                    </FormContainer>
                </ColumnHalf>
            </FlexAlignCenter>
        </WelcomeUI>
    );
}

export default Welcome;