import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <img
            src="path_to_your_background_image.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-white text-xl font-bold">
            CHAN
          </div>
          <div className="absolute top-12 left-4 text-white text-lg">
            Tiendas automáticas
          </div>
        </div>
        <div className="relative bg-white p-8 rounded-lg shadow-md w-96">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold mb-2">CHAN</div>
            <div className="text-lg">TIENDAS AUTOMÁTICAS</div>
            <h2 className="text-xl font-semibold mt-4">Bienvenidos</h2>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-700">
                Recordar contraseña
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
