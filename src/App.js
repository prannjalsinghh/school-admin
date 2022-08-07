
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/MainComponents/Home";
import ContactUs from "./components/MainComponents/ContactUs";
import Admin from "./components/MainComponents/Admin";

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contactUs" element={<ContactUs/>}></Route>
          <Route path = "/admin" element={<Admin/>}></Route>
    </Routes>
    </div>   
    
  );
}

export default App;
