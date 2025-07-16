import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={`/assets/${property.imagen}`}
        alt={property.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{property.titulo}</h3>
        <p className="text-gray-600 text-sm">{property.ubicacion}</p>
        <p className="text-blue-600 font-bold mt-2">{property.precio}</p>
        <Link
          to="/contacto"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium text-center rounded hover:bg-blue-700"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
}
