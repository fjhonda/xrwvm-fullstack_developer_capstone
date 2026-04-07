import LoginPanel from "./components/Login/Login"
import { Routes, Route, useLocation } from "react-router-dom";
import RegisterPanel from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"


function App() {

    const location = useLocation();
    console.log("Ruta actual: ", location.pathname);

  return (
    <Routes>
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />

    </Routes>
  );
}
export default App;
