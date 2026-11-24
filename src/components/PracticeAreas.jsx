import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import './PracticeAreas.css';

export default function PracticeAreas() {
  const [selectedId, setSelectedId] = useState(PRACTICE_AREAS[0].id);
  const activeArea = PRACTICE_AREAS.find((area) => area.id === selectedId) ?? PRACTICE_AREAS[0];

  return (
    <section id="atuacao" className="practice">
      <div className="container">
        <div className="practice__header reveal">
          <span className="eyebrow">Áreas de atuação</span>
          <h2 className="section-title">Consultoria jurídica estruturada para cada necessidade</h2>
          <p className="practice__intro">
            Selecione uma frente de atendimento para visualizar os principais serviços consultivos e
            contenciosos.
          </p>
        </div>

        <div className="practice__layout">
          <div className="practice__tabs reveal" role="tablist" aria-label="Áreas jurídicas">
            {PRACTICE_AREAS.map((area, index) => {
              const isActive = area.id === activeArea.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`practice__tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(area.id)}
                >
                  <span className="practice__tab-index">0{index + 1}</span>
                  <span className="practice__tab-title">{area.title}</span>
                </button>
              );
            })}
          </div>

          <div
            className="practice__panel reveal"
            style={{ '--reveal-delay': '120ms' }}
            data-parallax="-0.05"
            role="tabpanel"
          >
            <span className="eyebrow">Frente selecionada</span>
            <h3 className="practice__panel-title">{activeArea.title}</h3>
            <p className="practice__panel-summary">{activeArea.summary}</p>

            <ul className="practice__topics">
              {activeArea.topics.map((topic) => (
                <li key={topic} className="practice__topic">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <a href="#contato" className="btn btn-primary">
              Solicitar análise sobre esta área
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
