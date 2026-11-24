import { ShieldCheck, Scale, MessageSquareText } from 'lucide-react';
import consultoriaImg from '../assets/consultoria.jpg';
import { FIRM_INFO } from '../data/firmData';
import './AboutOffice.css';

const PILLARS = [
  {
    icon: Scale,
    title: 'Análise jurídica objetiva',
    text: 'Diagnóstico claro de riscos, prazos e alternativas antes da tomada de decisão.',
  },
  {
    icon: MessageSquareText,
    title: 'Comunicação direta',
    text: 'Acompanhamento transparente, traduzindo o juridiquês em orientações práticas.',
  },
  {
    icon: ShieldCheck,
    title: 'Atuação preventiva e estratégica',
    text: 'Estruturação documental pensada para proteger negócios, contratos e patrimônio.',
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
          <h2 className="section-title">Tradição técnica com visão contemporânea</h2>
          <p className="about__lead">
            Constituído em {FIRM_INFO.legalRegistration.openedAt}, o escritório{' '}
            <strong>{FIRM_INFO.brandName}</strong> combina atendimento personalizado com a
            estrutura executiva do Caminho das Árvores, em Salvador.
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
