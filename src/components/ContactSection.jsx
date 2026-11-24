import { useState } from 'react';
import { CheckCircle2, ExternalLink, Phone, Send } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import './ContactSection.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  area: PRACTICE_AREAS[0].title,
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contato" className="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal-on-scroll">
          <span className="eyebrow">Contato e agendamento</span>
          <h2 className="section-title">Converse com nossa equipe jurídica</h2>
          <p className="contact__text">
            Envie um resumo da sua demanda para agendamento de consulta presencial no Salvador
            Shopping Business ou atendimento telefônico.
          </p>

          <div className="contact__direct">
            <p className="contact__direct-label">Atendimento telefônico</p>
            <a href={FIRM_INFO.contact.phoneHref} className="contact__direct-phone">
              <Phone size={18} aria-hidden="true" />
              <span>{FIRM_INFO.contact.phoneDisplay}</span>
            </a>
            <p className="contact__direct-hours">
              Segunda a quinta, das 8h30 às 18h · Sexta, das 8h às 18h
            </p>
            <a
              href={FIRM_INFO.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="contact__direct-ig"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                marginTop: '0.9rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ff-bronze-deep)',
              }}
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>{FIRM_INFO.contact.instagramHandle}</span>
            </a>
          </div>
        </div>

        <div className="contact__card reveal-scale delay-1">
          {submitted ? (
            <div className="contact__success" role="status">
              <CheckCircle2 size={32} aria-hidden="true" />
              <h3>Solicitação registrada</h3>
              <p>
                Obrigado, <strong>{form.name}</strong>. Esta prévia não possui servidor de envio
                configurado; para atendimento imediato, ligue para{' '}
                <a href={FIRM_INFO.contact.phoneHref}>{FIRM_INFO.contact.phoneDisplay}</a>.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setForm(INITIAL_FORM);
                  setSubmitted(false);
                }}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Nome completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome ou razão social"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="phone">Telefone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(71) 99999-9999"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com.br"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="area">Área de interesse</label>
                <select id="area" name="area" value={form.area} onChange={handleChange}>
                  {PRACTICE_AREAS.map((area) => (
                    <option key={area.id} value={area.title}>
                      {area.title}
                    </option>
                  ))}
                  <option value="Outro assunto jurídico">Outro assunto jurídico</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Resumo da solicitação</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Descreva brevemente o contexto da sua consulta..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Solicitar agendamento
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
