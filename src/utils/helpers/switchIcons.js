import {ReactComponent as IconDashboard} from "@assets/icons/dashboard-svgrepo-com.svg";
import {ReactComponent as IconSaving} from "@assets/icons/saving-svgrepo-com.svg";
import {ReactComponent as IconCard} from "@assets/icons/card-3-svgrepo-com.svg";
import {ReactComponent as IconSettings} from "@assets/icons/settings-svgrepo-com.svg";
import {ReactComponent as IconTransaction} from "@assets/icons/transaction-svgrepo-com.svg";

export const switchIcon = icon => {

    switch(icon) {
        case 'dashboard':
            return <IconDashboard/>;
        case 'saving':
            return <IconSaving/>;
        case 'myCards':
            return <IconCard/>;
        case 'settings':
            return <IconSettings/>;
        case 'transactions':
            return <IconTransaction/>;
        default:
            return <IconDashboard/>;
    }
}