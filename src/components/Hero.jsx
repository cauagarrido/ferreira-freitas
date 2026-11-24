import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import logoImg from '../assets/logo-ferreira-freitas.png';
import { FIRM_INFO } from '../data/firmData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content reveal" data-parallax="0.06">
          <div className="hero__badge-row">
            <span className="eyebrow">Salvador · Bahia</span>
            <span className="hero__rating" aria-label="Avaliação 5,0 de 5 no Google">
              <Star size={14} fill="currentColor" aria-hidden="true" />
              <strong>{FIRM_INFO.rating.score}</strong>
              <span>
                ({FIRM_INFO.rating.reviewsCount} avaliações no {FIRM_INFO.rating.source})
              </span>
            </span>
          </div>

          <h1 className="hero__title">
            Advocacia e Consultoria Jurídica com rigor técnico e atendimento próximo.
          </h1>

          <p className="hero__subtitle">
            O escritório <strong>{FIRM_INFO.fullName}</strong> atua em Salvador desde 2018,
            oferecendo orientação jurídica clara e estratégica para decisões empresariais e
            patrimoniais.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn btn-primary">
              Agendar atendimento
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={FIRM_INFO.contact.phoneHref} className="btn btn-secondary">
              <Phone size={16} aria-hidden="true" />
              {FIRM_INFO.contact.phoneDisplay}
            </a>
          </div>

          <div className="hero__address">
            <MapPin size={17} className="hero__address-icon" aria-hidden="true" />
            <span>
              {FIRM_INFO.officeAddress.building} — {FIRM_INFO.officeAddress.street},{' '}
              {FIRM_INFO.officeAddress.neighborhood}
            </span>
          </div>
        </div>

        <div className="hero__visual reveal" style={{ '--reveal-delay': '120ms' }} data-parallax="-0.08">
          <div className="hero__image-frame">
            <img
              src={logoImg}
              alt="Logo Ferreira & Freitas Advocacia e Consultoria Jurídica"
              className="hero__image"
            />
          </div>
          <aside className="hero__floating-card" data-parallax="-0.14" aria-label="Horário de funcionamento">
            <span className="hero__card-label">Atendimento presencial e consultivo</span>
            <p className="hero__card-hours">Seg a Qui: 08h30 às 18h · Sex: 08h às 18h</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
