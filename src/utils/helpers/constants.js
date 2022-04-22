export const REGISTER_INPUTS = [
    {
        id: 'loginEmail',
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
    }, {
        id: 'loginPassword',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
    },
    {
        id: 'loginConfirmPassword',
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
    }
];

export const LOGIN_INPUTS = [
    {
        id: 'loginEmail',
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
    }, {
        id: 'loginPassword',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
    }
];

export const NAVIGATION_ITEMS = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        isActive: true,
        path: '/',
    },{
        id: 'myCards',
        name: 'My Cards',
        isActive: false,
        path: '/cards',
    },{
        id: 'saving',
        name: 'Saving',
        isActive: false,
        path: '/saving',
    },{
        id: 'transactions',
        name: 'Transaction',
        isActive: false,
        path: '/transactions',
    },{
        id: 'settings',
        name: 'Settings',
        isActive: false,
        path: '/settings'
    }
];