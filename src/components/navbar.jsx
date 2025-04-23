import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Asegúrate de que la ruta sea correcta

function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">CHAN Tiendas</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          {role === "admin" && (
            <>
              <li>
                <Link to="/products" className="hover:underline">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/machines" className="hover:underline">
                  Máquinas
                </Link>
              </li>
              <li>
                <Link to="/users" className="hover:underline">
                  Usuarios
                </Link>
              </li>
            </>
          )}
          {role === "colaborator" && (
            <li>
              <Link to="/inventory" className="hover:underline">
                Movimientos de inventario
              </Link>
            </li>
          )}
          <li>
            <Link to="/reports" className="hover:underline">
              Reportes
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="hover:underline">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
