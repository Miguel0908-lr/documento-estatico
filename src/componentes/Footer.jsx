import React from "react";
import { Link } from "react-router-dom";

function IconoSocial({ nombre }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
      {nombre === "facebook" && <path d="M14 21v-8h3l.5-4H14V7c0-1 .3-2 2-2h2V1.5A24 24 0 0 0 15 1c-3 0-5 2-5 5v3H7v4h3v8z" />}
      {nombre === "instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></>}
      {nombre === "youtube" && <><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m10 8 6 4-6 4z" /></>}
    </svg>
  );
}

function Footer({ redesSociales }) {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <Link className="brand footer-brand" to="/">Montreal<span aria-hidden="true">.</span></Link>
            <p>Formación y aprendizaje para seguir creciendo.</p>
          </div>
          <div>
            <p className="footer-label">Redes sociales</p>
            <ul className="social-links" aria-label="Redes sociales">
              {redesSociales && redesSociales.map((red) => (
                <li key={red.nombre} data-network={red.icono}>
                  {red.url ? (
                    <a href={red.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${red.nombre} (abre en otra pestaña)`}>
                      <IconoSocial nombre={red.icono} />
                      <span>{red.nombre}</span>
                    </a>
                  ) : (
                    <span className="social-link social-pending" title="Próximamente">
                      <IconoSocial nombre={red.icono} />
                      <span>{red.nombre}</span>
                      <span className="visually-hidden"> (próximamente)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Montreal. Todos los derechos reservados.</small>
          <div className="footer-bottom-links">
            <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
            <Link to="/">Volver a Inicio <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
