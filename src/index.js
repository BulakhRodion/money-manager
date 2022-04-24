import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext/AuthContext";
import {ThemeContextProvider} from "./context/ThemeContext/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
