import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./components/home/home.component";
import LoginComponent from "./components/login/login.component";
import NavbarComponent from "./components/navbar/navbar.component";
import PlpComponent from "./components/plp/plp.component";
import { cartConsumer } from "./contexts/cartContext";
import RegisterComponent from "./components/register/register.component";

function App() {
  return (
    <>
    <BrowserRouter>
      {cartConsumer(NavbarComponent)}
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/products" element={<PlpComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
      <div
        className="fluid-container p-2"
        style={{ backgroundColor: "lightgray", textAlign: "center" }}
      >
        Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd.
      </div>
    </>
  );
}

export default App;
