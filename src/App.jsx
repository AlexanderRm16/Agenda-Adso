import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Componentes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Ruta pública: accesible sin sesión */}
      <Route path="/login" element={<Login />} />

      {/* Ruta privada: ProtectedRoute revisa la sesión ANTES de montar el Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Cualquier URL desconocida vuelve a la raíz (y esa raíz ya está protegida) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
