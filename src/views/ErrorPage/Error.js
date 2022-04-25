import React from 'react';
import {ErrorButton, ErrorContainer, ErrorImage, ErrorText, ErrorTitle, ErrorUI} from "./Error.styles";
import {ImgError} from "../../assets/images/images";
import {useNavigate} from "react-router-dom";

function Error() {

    const navigateHome = useNavigate();

    return (
        <ErrorUI>
            <ErrorContainer>
                <ErrorImage src={ImgError} alt="Error"/>
                <ErrorTitle>Oh no!</ErrorTitle>
                <ErrorText>
                    Usually we can find any page, but unfortunately not this time</ErrorText>
                <ErrorButton onClick={() => navigateHome('/')}>Go to Homepage</ErrorButton>
            </ErrorContainer>
        </ErrorUI>
    );
}

export default Error;