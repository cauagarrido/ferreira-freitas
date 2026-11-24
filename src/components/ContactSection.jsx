import { useState } from 'react';
import { Check, Clock, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import './ContactSection.css';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { contact, officeAddress } = FIRM_INFO;

  async function handleCopyPhone() {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="contact__shell">
          <div className="contact__intro">
            <span className="eyebrow">Contato e agendamento</span>
            <h2 className="section-title">Fale diretamente com o escritório</h2>
            <p className="contact__text">
              Para agendar uma consulta presencial no Salvador Shopping Business ou esclarecer
              dúvidas iniciais sobre seu caso, utilize nossos canais diretos de atendimento.
            </p>
            <div className="contact__hours-pill">
              <Clock size={16} aria-hidden="true" />
              <span>Segunda a quinta: 08h30 às 18h · Sexta: 08h às 18h</span>
            </div>
          </div>

          <div className="contact__channels">
            <div className="contact__channel contact__channel--primary">
              <div className="contact__channel-head">
                <span className="contact__channel-icon">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__channel-label">Telefone direto</span>
                  <strong className="contact__channel-value">{contact.phoneDisplay}</strong>
                </div>
              </div>
              <div className="contact__channel-actions">
                <a href={contact.phoneHref} className="btn btn-primary contact__btn-call">
                  <Phone size={16} aria-hidden="true" />
                  Ligar agora
                </a>
                <button
                  type="button"
                  className="btn btn-secondary contact__btn-copy"
                  onClick={handleCopyPhone}
                >
                  {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  {copied ? 'Número copiado' : 'Copiar número'}
                </button>
              </div>
            </div>

            <a
              href={contact.emailHref}
              className="contact__channel contact__channel--link"
            >
              <div className="contact__channel-head">
                <span className="contact__channel-icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__channel-label">E-mail</span>
                  <strong className="contact__channel-value">{contact.email}</strong>
                  <span className="contact__channel-sub">Envie sua solicitação por e-mail</span>
                </div>
              </div>
            </a>

            <a
              href={officeAddress.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="contact__channel contact__channel--link"
            >
              <div className="contact__channel-head">
                <span className="contact__channel-icon">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact__channel-label">Atendimento presencial</span>
                  <strong className="contact__channel-value">{officeAddress.building}</strong>
                  <span className="contact__channel-sub">
                    {officeAddress.street}, {officeAddress.neighborhood} — Abrir rota
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
