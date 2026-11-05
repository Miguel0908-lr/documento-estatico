import React from "react";
import { Link } from "react-router-dom";

function Inicio({ apartados }) {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-layout">
          <div>
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Idiomas · Tecnología · Cultura</p>
            <h1>Potenciamos tu futuro a través del <em>aprendizaje.</em></h1>
            <p className="hero-description">Formación dinámica, herramientas de tecnología avanzada e intercambio cultural para que sigas creciendo.</p>
            <div className="hero-actions"><Link to="/cursos" className="button button-primary">Explorar cursos <span aria-hidden="true">↗</span></Link><Link to="/contactanos" className="button button-secondary">Contáctanos</Link></div>
          </div>
          <div className="hero-logo-card"><img src="/logo-montreal.jpeg" alt="Montreal Idiomas, Tecnología y Cultura Atlacomulco" /></div>
        </div>
      </section>
      <section className="elements-section site-container" aria-labelledby="apartados-titulo">
        <div className="section-heading">
          <div><p className="eyebrow">Descubre Montreal</p><h2 id="apartados-titulo">Un espacio para seguir creciendo</h2></div>
          <p>Conoce nuestra esencia, explora la información de cursos y encuentra cómo acercarte a nosotros.</p>
        </div>
        <div className="element-grid overview-grid">
          {apartados.map((apartado, index) => (
            <article className="element-card" key={apartado.slug}>
              <div className="card-meta"><span>{apartado.etiqueta}</span><span className="code-badge">0{index + 1}</span></div>
              <h3>{apartado.menu}</h3>
              <p>{apartado.descripcion}</p>
              <Link className="text-link" to={`/${apartado.slug}`}>{apartado.enlace} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
