import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import logoImg from '../assets/logo-navbar.png';
import { FIRM_INFO } from '../data/firmData';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'O Escritório', href: '#escritorio' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" aria-label={FIRM_INFO.fullName}>
          <img
            src={logoImg}
            alt="Logo Ferreira & Freitas Advocacia e Consultoria"
            className="navbar__logo"
          />
        </a>

        <nav className="navbar__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={FIRM_INFO.contact.phoneHref} className="navbar__phone">
            <Phone size={15} aria-hidden="true" />
            <span>{FIRM_INFO.contact.phoneDisplay}</span>
          </a>
          <a href="#contato" className="btn btn-primary navbar__cta">
            Agendar consulta
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <div className="container navbar__mobile-inner">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={FIRM_INFO.contact.phoneHref}
              className="btn btn-secondary"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} aria-hidden="true" />
              {FIRM_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
