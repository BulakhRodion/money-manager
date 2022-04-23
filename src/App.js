import Welcome from "./views/Welcome/Welcome";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import {AuthContext} from "./context/AuthContext";
import {useContext} from "react";
import Cards from "./views/Cards/Cards";
import Saving from "./views/Saving/Saving";
import Transactions from "./views/Transaction/Transactions";
import Settings from "./views/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./Global.styles";


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  const RequireNoAuth = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        {currentUser && <Navbar />}
        <Routes>
          <Route path="/">
            <Route path="login" element={<RequireNoAuth><Welcome /></RequireNoAuth>} />
            <Route index element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="cards" element={<RequireAuth><Cards /></RequireAuth>} />
            <Route path="saving" element={<RequireAuth><Saving /></RequireAuth>} />
            <Route path="transactions" element={<RequireAuth><Transactions /></RequireAuth>} />
            <Route path="settings" element={<RequireAuth><Settings /></RequireAuth>} />
          </Route>
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </div>
  );
}

export default App;
