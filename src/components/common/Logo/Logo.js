import React from 'react';
import {LogoLink} from "./Logo.styles";
import {ThemeProvider} from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../../context/ThemeContext/ThemeContext";
import {darkTheme, lightTheme} from "../../../Global.styles";
import {switchIcon} from "../../../utils/helpers/switchIcons";

function Logo() {
    const {darkMode} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
            <div>
                <LogoLink href="/">
                    {switchIcon('logo')}
                    Wallet
                </LogoLink>
            </div>
        </ThemeProvider>
    );
}

export default Logo;