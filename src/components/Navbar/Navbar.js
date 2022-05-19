import React from 'react';
import Logo from "../common/Logo/Logo";
import {NavbarContainer, NavbarList} from "./Navbar.styles";
import {NAVIGATION_ITEMS} from "@utils/helpers/constants";
import NavItem from "./NavItem";
import Switch from "../common/Switch/Switch";
import {NavDivider} from "./NavItem.styles";
import {switchIcon} from "@utils/helpers/switchIcons";
import {darkTheme, lightTheme} from "../../Global.styles";
import {ThemeProvider} from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext/ThemeContext";


function Navbar() {
    const {darkMode} = useContext(ThemeContext);
    const NavItems = [...NAVIGATION_ITEMS];

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <NavbarContainer>
                <Logo/>
                <NavbarList>
                    {NavItems.map(item => {
                        return (
                            <NavItem key={item.id} details={item}/>
                        )
                    })}
                </NavbarList>
                <NavDivider/>
                <Switch>
                    {switchIcon('light')}
                    {switchIcon('dark')}
                </Switch>
            </NavbarContainer>
        </ThemeProvider>
    );
}

export default Navbar;