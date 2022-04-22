import React from 'react';
import { IconWallet } from '@assets/icons/icons.js';
import {LogoImg, LogoLink} from "./Logo.styles";

function Logo() {
    return (
        <div>
            <LogoLink href="/">
                <LogoImg src={IconWallet} alt="icon" />
                Wallet
            </LogoLink>
        </div>
    );
}

export default Logo;