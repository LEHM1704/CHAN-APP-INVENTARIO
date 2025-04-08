import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Inventario from "./components/Inventario";
import ProductList from "./pages/ProductList";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/producto" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
