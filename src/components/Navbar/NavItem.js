import React from 'react';
import {NavIconWrapper, NavItemStyles} from "./NavItem.styles";
import {switchIcon} from "../../utils/helpers/switchIcons";
import {NavLink} from "react-router-dom";
import {darkTheme, lightTheme} from "../../Global.styles";
import {ThemeProvider} from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext/ThemeContext";

function NavItem(props) {
    const {darkMode} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <NavItemStyles>
                <NavLink to={props.details.path}>
                    <NavIconWrapper>
                        {switchIcon(props.details.id)}
                    </NavIconWrapper>
                    {props.details.name}
                </NavLink>
            </NavItemStyles>
        </ThemeProvider>
    );
}

export default NavItem;