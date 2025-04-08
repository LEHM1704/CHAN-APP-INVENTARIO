// src/pages/Login.js
import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("¡Bienvenido!");
      setTimeout(() => navigate("/dashboard"), 1500); // Redirecciona tras 1.5 segundos
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("Bienvenido") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => navigate("/registro")}
            className="text-blue-500 hover:underline"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
