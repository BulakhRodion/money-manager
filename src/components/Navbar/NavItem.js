import React from 'react';
import {NavIconWrapper, NavItemStyles} from "./NavItem.styles";
import {switchIcon} from "../../utils/helpers/switchIcons";
import {NavLink} from "react-router-dom";

function NavItem(props) {

    return (
        <NavItemStyles>
            <NavLink to={props.details.path}>
                <NavIconWrapper>
                    {switchIcon(props.details.id)}
                </NavIconWrapper>
                {props.details.name}
            </NavLink>
        </NavItemStyles>
    );
}

export default NavItem;