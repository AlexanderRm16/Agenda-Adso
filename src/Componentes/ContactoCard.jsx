// Archivo: src/components/ContactoCard.jsx

export default function ContactoCard({
  id,
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
  onEditar // <- Recibimos la nueva función
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {nombre}
          </h3>

          {etiqueta && (
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mt-2">
              {etiqueta}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onEditar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            Editar
          </button>

          <button
            onClick={onEliminar}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-gray-600">
          <strong>Teléfono:</strong> {telefono}
        </p>

        <p className="text-gray-600">
          <strong>Correo:</strong> {correo}
        </p>
      </div>
    </div>
  );
}

