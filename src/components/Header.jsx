import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <img src="/logo.png" alt="Cuatro Alturas" className="h-8 inline-block mr-2" />
          Cuatro Alturas
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden px-2 py-1 border">
          &#9776;
        </button>
        <ul className={`${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-6\`}>
          <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Inicio</Link></li>
          <li><Link to="/propiedades" className="block px-4 py-2 hover:bg-gray-100">Propiedades</Link></li>
          <li><Link to="/nosotros" className="block px-4 py-2 hover:bg-gray-100">Nosotros</Link></li>
          <li><Link to="/contacto" className="block px-4 py-2 hover:bg-gray-100">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
