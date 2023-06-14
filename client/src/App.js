import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;
