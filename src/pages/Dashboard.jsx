import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error al obtener la sesión:", error.message);
      } else {
        setSession(data.session);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error.message);
    } else {
      navigate("/"); // Redirige al login
    }
  };

  if (!session) {
    return <p>No estás autenticado. Por favor, inicia sesión.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="mb-6">
        Bienvenido, {session.user.email || session.user.phone}
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
