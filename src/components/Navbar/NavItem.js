import React from 'react';
import {NavItemStyles} from "./NavItem.styles";
import {ReactComponent as IconDashboard} from "@assets/icons/dashboard-svgrepo-com.svg";
import {ReactComponent as IconSaving} from "@assets/icons/saving-svgrepo-com.svg";
import {ReactComponent as IconCard} from "@assets/icons/card-3-svgrepo-com.svg";
import {ReactComponent as IconSettings} from "@assets/icons/settings-svgrepo-com.svg";
import {ReactComponent as IconTransaction} from "@assets/icons/transaction-svgrepo-com.svg";

function NavItem(props) {

    const switchIcon = icon => {

        switch(icon) {
            case 'Dashboard':
                return <IconDashboard/>;
            case 'Saving':
                return <IconSaving/>;
            case 'My Cards':
                return <IconCard/>;
            case 'Settings':
                return <IconSettings/>;
            case 'Transaction':
                return <IconTransaction/>;
            default:
                return <IconDashboard/>;
        }
    }

    return (
        <NavItemStyles>
            {switchIcon(props.children)}
            {props.children}
        </NavItemStyles>
    );
}

export default NavItem;