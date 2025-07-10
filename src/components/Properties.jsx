import properties from '../data/properties.json';
import PropertyCard from './PropertyCard';

export default function Properties() {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Propiedades Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(prop => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </main>
  );
}
