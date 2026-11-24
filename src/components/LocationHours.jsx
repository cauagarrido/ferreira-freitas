import { Clock, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import './LocationHours.css';

export default function LocationHours() {
  const { officeAddress, hours, contact } = FIRM_INFO;

  return (
    <section id="localizacao" className="location">
      <div className="container">
        <div className="location__header reveal">
          <span className="eyebrow">Unidade Salvador</span>
          <h2 className="section-title">Atendimento no Caminho das Árvores</h2>
        </div>

        <div className="location__grid">
          <div className="location__card reveal" data-parallax="0.04">
            <div className="location__card-head">
              <MapPin size={20} aria-hidden="true" />
              <h3>Endereço de atendimento</h3>
            </div>
            <p className="location__address-main">
              <strong>{officeAddress.building}</strong>
              <br />
              {officeAddress.street} — {officeAddress.neighborhood}
              <br />
              {officeAddress.cityState}, CEP {officeAddress.zip}
            </p>
            <p className="location__access">
              <Navigation size={15} aria-hidden="true" />
              <span>{officeAddress.accessNote}</span>
            </p>
            <a
              href={officeAddress.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary location__map-btn"
            >
              Ver rotas no Google Maps
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div
            className="location__card location__card--dark reveal"
            style={{ '--reveal-delay': '120ms' }}
            data-parallax="-0.05"
          >
            <div className="location__card-head">
              <Clock size={20} aria-hidden="true" />
              <h3>Horário de funcionamento</h3>
            </div>

            <dl className="location__hours">
              {hours.map((item) => (
                <div key={item.days} className="location__hours-row">
                  <dt>{item.days}</dt>
                  <dd>{item.time}</dd>
                </div>
              ))}
            </dl>

            <div className="location__phone-box">
              <span className="location__phone-label">Telefone direto</span>
              <a href={contact.phoneHref} className="location__phone-link">
                <Phone size={18} aria-hidden="true" />
                <span>{contact.phoneInternational}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
