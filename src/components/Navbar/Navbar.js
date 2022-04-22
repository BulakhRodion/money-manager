import React from 'react';
import Logo from "../common/Logo/Logo";
import {NavbarContainer, NavbarList} from "./Navbar.styles";
import {NAVIGATION_ITEMS} from "../../utils/helpers/constants";
import NavItem from "./NavItem";


function Navbar() {

    const NavItems = [...NAVIGATION_ITEMS];

    return (
        <NavbarContainer>
            <Logo/>
            <NavbarList>
                {NavItems.map(item => {
                    return (
                        <NavItem key={item.id} porps={item}>
                            {item.name}
                        </NavItem>
                    )
                })}
            </NavbarList>
        </NavbarContainer>
    );
}

export default Navbar;