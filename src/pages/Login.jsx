import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const CORREO_VALIDO = "dainerruiz8@gmail.com";
const PASSWORD_VALIDO = "1234";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const correoIngresado = email.trim().toLowerCase();

    if (!correoIngresado || !password) {
      setError("Debes ingresar el correo y la contraseña.");
      return;
    }

    if (correoIngresado === CORREO_VALIDO && password === PASSWORD_VALIDO) {
      login(correoIngresado);
      navigate("/", { replace: true });
    } else {
      setError("Credenciales incorrectas. Verifica el correo y la contraseña.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl border border-slate-100 px-7 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-lg font-bold">
            A
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
              SENA CTMA · ADSO
            </p>
            <h1 className="text-xl font-extrabold text-gray-900">
              Login Agenda ADSO
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@sena.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
              autoComplete="current-password"
            />
          </div>

          {/* Mensaje de acceso inválido, visible y comprensible */}
          {error && (
            <div
              role="alert"
              className="rounded-xl bg-red-50 border border-red-200 px-4 py-3"
            >
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-6 text-[11px] leading-relaxed text-gray-500 border-t border-gray-100 pt-4">
          Login con fines pedagógicos. Las credenciales se validan en el
          navegador, no en un servidor: no es una solución segura para
          producción.
        </p>
      </div>
    </div>
  );
}
