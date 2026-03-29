import LoginPanel from "./components/Login/Login"
import { Routes, Route, useLocation } from "react-router-dom";
import RegisterPanel from "./components/Register/Register";

function App() {

    const location = useLocation();
    console.log("Ruta actual: ", location.pathname);

  return (
    <Routes>
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
