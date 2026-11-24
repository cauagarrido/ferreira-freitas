import socioFerreiraImg from '../assets/socio-ferreira.jpg';
import sociaFreitasImg from '../assets/socia-freitas.jpg';
import { FIRM_INFO, PARTNERS } from '../data/firmData';
import './TeamSection.css';

const PHOTOS = {
  ferreira: socioFerreiraImg,
  freitas: sociaFreitasImg,
};

export default function TeamSection() {
  return (
    <section id="equipe" className="team">
      <div className="container">
        <div className="team__header">
          <span className="eyebrow">Equipe</span>
          <h2 className="section-title">Os sócios por trás do escritório</h2>
          <p className="team__intro">
            Fundado em {FIRM_INFO.legalRegistration.openedAt}, o escritório{' '}
            <strong>{FIRM_INFO.fullName}</strong> oferece atendimento jurídico direto e
            personalizado em Salvador, atuando nas áreas Previdenciária, Família, Sucessões,
            Cível, Consumidor, Trabalhista e Imobiliário.
          </p>
        </div>

        <div className="team__grid">
          {PARTNERS.map((partner) => (
            <article key={partner.id} className="team__card">
              <div className="team__photo-wrap">
                <img
                  src={PHOTOS[partner.photoKey]}
                  alt={`Retrato de ${partner.name}`}
                  className="team__photo"
                />
              </div>
              <div className="team__body">
                <h3 className="team__name">{partner.name}</h3>
                <p className="team__role">{partner.role}</p>
                <p className="team__bio">{partner.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
