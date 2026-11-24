import logoImg from '../assets/logo-ferreira-freitas.png';
import { FIRM_INFO } from '../data/firmData';
import './Footer.css';

export default function Footer() {
  const { legalRegistration, officeAddress, contact } = FIRM_INFO;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <div className="footer__logo-wrap">
            <img
              src={logoImg}
              alt="Logo Ferreira & Freitas Advocacia e Consultoria"
              className="footer__logo"
            />
          </div>
          <p className="footer__tagline">{FIRM_INFO.fullName}</p>
          <p className="footer__phone">
            Telefone: <a href={contact.phoneHref}>{contact.phoneInternational}</a>
          </p>
          <p className="footer__phone" style={{ marginTop: '0.35rem' }}>
            Instagram:{' '}
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              {contact.instagramHandle}
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Unidade de Atendimento</h3>
          <p className="footer__text">
            {officeAddress.building}
            <br />
            {officeAddress.street}, {officeAddress.neighborhood}
            <br />
            {officeAddress.cityState}, {officeAddress.zip}
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Dados Cadastrais</h3>
          <p className="footer__text">
            <strong>Razão social:</strong> {legalRegistration.razaoSocial}
            <br />
            <strong>CNPJ:</strong> {legalRegistration.cnpj}
            <br />
            <strong>Abertura:</strong> {legalRegistration.openedAt} ({legalRegistration.status})
            <br />
            <strong>Endereço cadastral:</strong> {legalRegistration.registeredAddress}
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {FIRM_INFO.fullName}. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
