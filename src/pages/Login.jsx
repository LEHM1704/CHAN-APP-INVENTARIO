import React, { useState } from "react";
import { signIn } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../index.css"; // importa las utilidades

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-bg">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Bienvenido
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <label className="block mb-1 font-medium text-secondary">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-2 rounded border border-gray-200 focus:border-primary focus:outline-none"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-1 font-medium text-secondary">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full mb-6 p-2 rounded border border-gray-200 focus:border-primary focus:outline-none"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
