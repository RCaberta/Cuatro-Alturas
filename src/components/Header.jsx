import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/propiedades', label: 'Desarrollos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `block rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition hover:text-brand-gold/90 ${
      isActive ? 'text-brand-gold' : 'text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/60 to-transparent backdrop-blur"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-brand-lg backdrop-blur">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/20 text-lg font-semibold text-brand-gold">
              CA
            </span>
            <div className="leading-tight">
              <span className="block text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold/80">Amanity</span>
              <span className="block text-lg font-semibold">Cuatro Alturas</span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClasses} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-slate transition hover:bg-amber-200"
            >
              Agenda una visita
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-gold/60 hover:text-brand-gold lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            <span className="text-2xl">≡</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mt-4 rounded-3xl border border-white/10 bg-brand-slate/80 p-6 backdrop-blur lg:hidden">
            <ul className="space-y-4 text-center">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest transition ${
                        isActive ? 'bg-brand-gold text-brand-slate' : 'text-white hover:bg-white/10'
                      }`
                    }
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-6 block rounded-full bg-brand-gold px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-brand-slate"
            >
              Agenda una visita
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
