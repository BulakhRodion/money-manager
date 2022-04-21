import Welcome from "./views/Welcome/Welcome";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import {AuthContext} from "./context/AuthContext";
import {useContext} from "react";


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Welcome />} />
            <Route index element={<RequireAuth><Dashboard /></RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
