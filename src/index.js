import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyles} from "./Global.styles";
import {AuthContextProvider} from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
          <GlobalStyles />
          <App />
      </AuthContextProvider>
  </React.StrictMode>
);
