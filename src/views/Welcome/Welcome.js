import React from 'react';
import {ImgPreview} from "@assets/images/images";
import LoginForm from "../Login/LoginForm/LoginForm";


function Welcome() {

    return (
        <div>
            <div>
                <h1> Fast <span> & </span> Digital</h1>
                <h3>solution to manage your finances</h3>
            </div>
            <div>
                <LoginForm />
            </div>
            <img src={ImgPreview} alt="Income Notes Preview"/>
        </div>
    );
}

export default Welcome;