import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">CHAN</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-yellow-200">
            Login
          </Link>
          <Link to="/inventario" className="text-white hover:text-yellow-200">
            Inventario
          </Link>
          <Link to="/producto" className="text-white hover:text-yellow-200">
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
