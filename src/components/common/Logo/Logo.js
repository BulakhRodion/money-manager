import React from 'react';
import { IconWallet } from '@assets/icons/icons.js';

function Logo() {
    return (
        <div>
            <img src={IconWallet} alt="icon" />
            <h2>My Wallet</h2>
        </div>
    );
}

export default Logo;