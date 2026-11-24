import { ShieldCheck, Scale, MessageSquareText } from 'lucide-react';
import consultoriaImg from '../assets/consultoria.jpg';
import { FIRM_INFO } from '../data/firmData';
import './AboutOffice.css';

const PILLARS = [
  {
    icon: Scale,
    title: 'Diagnóstico preciso',
    text: 'Mapeamento de riscos, prazos e caminhos viáveis antes de qualquer medida judicial.',
  },
  {
    icon: MessageSquareText,
    title: 'Linguagem acessível',
    text: 'Explicações diretas sobre cada movimentação, sem termos técnicos desnecessários.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevenção de conflitos',
    text: 'Revisão criteriosa de documentos e contratos para evitar litígios futuros.',
  },
];

export default function AboutOffice() {
  return (
    <section id="escritorio" className="about">
      <div className="container about__grid">
        <div className="about__media reveal" data-parallax="-0.07">
          <img
            src={consultoriaImg}
            alt="Mesa de consultoria jurídica com livros de direito e luminária em bronze"
            className="about__image"
          />
        </div>

        <div className="about__content reveal" style={{ '--reveal-delay': '100ms' }} data-parallax="0.05">
          <span className="eyebrow">O escritório</span>
          <h2 className="section-title">Rigor técnico aliado à escuta atenta</h2>
          <p className="about__lead">
            Em atividade desde {FIRM_INFO.legalRegistration.openedAt}, a{' '}
            <strong>{FIRM_INFO.brandName}</strong> construiu sua reputação com atendimento
            individualizado, transparência nos pareceres e acompanhamento próximo de cada caso.
          </p>

          <div className="about__pillars">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="about__pillar reveal"
                  style={{ '--reveal-delay': `${160 + idx * 80}ms` }}
                >
                  <div className="about__pillar-icon">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="about__pillar-title">{pillar.title}</h3>
                    <p className="about__pillar-text">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
