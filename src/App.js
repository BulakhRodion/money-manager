import Welcome from "./views/Welcome/Welcome";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";

const currentUser = false; //TODO: Finish user authentication check

const RequireAuth = ({ children }) => {
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
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
