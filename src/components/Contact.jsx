import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <main className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" name="nombre" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea name="mensaje" rows="4" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={formData.mensaje} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Enviar Mensaje</button>
      </form>
    </main>
  );
}
