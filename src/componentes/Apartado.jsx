import React from "react";
import { Link } from "react-router-dom";

const contenidos = {
  "mision-y-vision": [
    { titulo: "Misión", texto: "Impulsar el desarrollo personal y profesional a través del aprendizaje, acercando la formación a las personas que quieren fortalecer sus conocimientos y habilidades." },
    { titulo: "Visión", texto: "Construir una comunidad en la que el aprendizaje continuo abra nuevas oportunidades y permita a cada persona avanzar hacia sus metas." }
  ],
  "sobre-nosotros": [
    { titulo: "Somos Montreal", texto: "Creemos en el aprendizaje como una oportunidad para crecer. Nuestra propuesta pone en el centro a las personas, sus objetivos y su interés por seguir preparándose." },
    { titulo: "Lo que nos mueve", texto: "La formación continua, la claridad y el compromiso con el desarrollo de habilidades guían nuestra manera de entender la educación." }
  ],
  "cursos": [
    { titulo: "Contenidos y objetivos", texto: "Conoce los temas y habilidades de cada curso para elegir una formación que se relacione con tus metas." },
    { titulo: "Modalidades y fechas", texto: "Consulta la disponibilidad, las modalidades y las próximas fechas antes de iniciar tu formación." },
    { titulo: "Inscripciones", texto: "Solicita información sobre los requisitos y el proceso de inscripción del curso que te interese." }
  ],
  "aviso-de-privacidad": [
    { titulo: "Responsable y contacto", texto: "El sitio identifica a Montreal y publica como medio de contacto atlacomulcomontreal@gmail.com. La denominación legal y el domicilio del responsable deben confirmarse antes de publicar este aviso." },
    { titulo: "Información y finalidades", texto: "Este sitio no incluye formularios, cuentas de usuario ni compras en línea. Si escribes por correo o WhatsApp, los datos que incluyas en tu mensaje se utilizarán para atender tu solicitud y darle seguimiento." },
    { titulo: "Servicios de terceros", texto: "Los enlaces de correo y WhatsApp abren servicios externos. Si los utilizas, el tratamiento de tus datos también queda sujeto a los avisos y prácticas de esos proveedores." },
    { titulo: "Solicitudes sobre tus datos", texto: "Para consultas relacionadas con privacidad puedes escribir a atlacomulcomontreal@gmail.com. Montreal debe confirmar aquí el procedimiento, los requisitos y los plazos aplicables para atender solicitudes sobre datos personales." },
    { titulo: "Cookies y conservación", texto: "La interfaz del sitio no integra herramientas propias de analítica o publicidad. Deben confirmarse las prácticas del proveedor de alojamiento y los plazos de conservación aplicables a los mensajes recibidos." },
    { titulo: "Actualizaciones", texto: "Este aviso puede actualizarse cuando cambien el sitio o las prácticas de tratamiento. La fecha de última actualización debe añadirse al aprobar la versión definitiva." }
  ]
};

const productos = [
  { tipo: "Ruta formativa", titulo: "Cursos especializados", texto: "Formación práctica para fortalecer tus conocimientos y avanzar con mayor seguridad en tus objetivos.", icono: "✦", color: "blue" },
  { tipo: "Recurso digital", titulo: "Materiales de aprendizaje", texto: "Guías, ejercicios y recursos complementarios para continuar aprendiendo a tu propio ritmo.", icono: "▣", color: "purple" },
  { tipo: "Acompañamiento", titulo: "Orientación personalizada", texto: "Te ayudamos a encontrar la opción de formación que mejor se ajusta a tus necesidades.", icono: "↗", color: "yellow" }
];

const aliados = [
  { iniciales: "EC", nombre: "Espacio colaborativo", detalle: "Comunidad y desarrollo" },
  { iniciales: "FP", nombre: "Formación profesional", detalle: "Conocimiento aplicado" },
  { iniciales: "RC", nombre: "Red de crecimiento", detalle: "Oportunidades compartidas" },
  { iniciales: "IA", nombre: "Impulso académico", detalle: "Aprendizaje continuo" }
];

const galeria = [
  { src: "montreal-01.jpeg", alt: "Fachada de Montreal Atlacomulco con letreros de cursos y acceso principal", titulo: "Bienvenidos a Montreal" },
  { src: "montreal-02.jpeg", alt: "Jardín y vista exterior de las instalaciones de Montreal", titulo: "Nuestros espacios" },
  { src: "montreal-03.jpeg", alt: "Aula con pizarrón, mesas y estantes con materiales de trabajo", titulo: "Espacio para crear" },
  { src: "montreal-04.jpeg", alt: "Salón con pupitres, pantalla y recursos didácticos", titulo: "Aprender con recursos" },
  { src: "montreal-05.jpeg", alt: "Aula con pupitres y carteles para el aprendizaje de inglés", titulo: "Aulas de idiomas" },
  { src: "montreal-06.jpeg", alt: "Área de computación con equipos y estaciones individuales", titulo: "Tecnología para aprender" }
];

const testimonios = [
  { cita: "Encontré una forma clara y cercana de seguir preparándome. El acompañamiento hizo la diferencia.", nombre: "Mariana G.", rol: "Participante" },
  { cita: "Montreal me ayudó a convertir una intención en un siguiente paso concreto para mi desarrollo.", nombre: "Carlos R.", rol: "Cliente" },
  { cita: "La experiencia fue práctica, humana y muy fácil de integrar a mi rutina.", nombre: "Fernanda L.", rol: "Participante" }
];

function Apartado({ apartado, contacto }) {
  const esContacto = apartado.slug === "contactanos";
  const esPrivacidad = apartado.slug === "aviso-de-privacidad";
  const tieneContacto = contacto.correo || contacto.whatsapp;

  function renderSeccionEspecial() {
    if (apartado.slug === "nuestros-productos") return <section className="special-section product-showcase" aria-labelledby="productos-titulo">
      <div className="special-intro"><p className="eyebrow">Una propuesta para ti</p><h2 id="productos-titulo">Herramientas para seguir creciendo</h2><p>Diseñamos cada producto pensando en experiencias claras, útiles y cercanas.</p></div>
      <div className="product-grid">{productos.map((producto) => <article className={`product-card product-card-${producto.color}`} key={producto.titulo}><span className="product-icon" aria-hidden="true">{producto.icono}</span><p className="card-kicker">{producto.tipo}</p><h3>{producto.titulo}</h3><p>{producto.texto}</p><Link className="text-link" to="/contactanos">Solicitar información <span aria-hidden="true">→</span></Link></article>)}</div>
    </section>;

    if (apartado.slug === "aliados-estrategicos") return <section className="special-section allies-showcase" aria-labelledby="aliados-titulo">
      <div className="special-intro"><p className="eyebrow">Juntos llegamos más lejos</p><h2 id="aliados-titulo">Una red que multiplica oportunidades</h2><p>Colaboramos con organizaciones que comparten nuestra visión de aprendizaje y desarrollo.</p></div>
      <div className="allies-grid">{aliados.map((aliado) => <article className="ally-card" key={aliado.nombre}><span className="ally-mark" aria-hidden="true">{aliado.iniciales}</span><div><h3>{aliado.nombre}</h3><p>{aliado.detalle}</p></div></article>)}</div>
      <div className="information-panel compact-panel"><h2>¿Quieres construir con nosotros?</h2><p>Si tu organización busca generar nuevas oportunidades de aprendizaje, conversemos.</p><Link className="button button-primary" to="/contactanos">Conocer oportunidades <span aria-hidden="true">↗</span></Link></div>
    </section>;

    if (apartado.slug === "galeria") return <section className="special-section gallery-showcase" aria-labelledby="galeria-titulo"><div className="special-intro"><p className="eyebrow">Momentos Montreal</p><h2 id="galeria-titulo">Así se vive el aprendizaje</h2><p>Conoce nuestras instalaciones, aulas y espacios de aprendizaje. Selecciona una foto para verla completa.</p></div><div className="gallery-grid">{galeria.map((imagen) => <figure className="gallery-item" key={imagen.src}><a href={`${process.env.PUBLIC_URL}/galeria/${imagen.src}`} target="_blank" rel="noopener noreferrer" aria-label={`Ver foto completa: ${imagen.titulo} (abre en otra pestaña)`}><img src={`${process.env.PUBLIC_URL}/galeria/${imagen.src}`} alt={imagen.alt} width="1600" height="1200" loading="lazy" decoding="async" /><figcaption>{imagen.titulo}</figcaption></a></figure>)}</div></section>;

    if (apartado.slug === "testimonios") return <section className="special-section testimonials-showcase" aria-labelledby="testimonios-titulo"><div className="special-intro"><p className="eyebrow">Voces de nuestra comunidad</p><h2 id="testimonios-titulo">Historias que nos inspiran</h2><p>Cada experiencia es distinta. Lo que compartimos es la decisión de seguir avanzando.</p></div><div className="testimonials-grid">{testimonios.map((testimonio) => <figure className="testimonial-card" key={testimonio.nombre}><div className="quote-mark" aria-hidden="true">“</div><blockquote>{testimonio.cita}</blockquote><figcaption><span className="avatar" aria-hidden="true">{testimonio.nombre.charAt(0)}</span><span><strong>{testimonio.nombre}</strong><small>{testimonio.rol}</small></span></figcaption></figure>)}</div></section>;

    return null;
  }

  return (
    <div className="site-container detail-page">
      <nav className="breadcrumb-nav" aria-label="Ubicación">
        <Link to="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{apartado.menu}</span>
      </nav>
      <div className="detail-heading">
        <p className="eyebrow">{apartado.etiqueta}</p>
        <h1>{apartado.menu}</h1>
        <p>{apartado.descripcion}</p>
      </div>
      {esContacto ? (
        <section className="information-panel" aria-labelledby="contacto-titulo">
          <h2 id="contacto-titulo">Hablemos de tu próximo paso</h2>
          <p>Consulta tus dudas sobre cursos, contenidos, modalidades o inscripciones.</p>
          {tieneContacto ? (
            <ul className="contact-options">
              {contacto.correo && <li><h3>Correo electrónico</h3><a className="text-link" href={`mailto:${contacto.correo}`}>{contacto.correo} <span aria-hidden="true">↗</span></a></li>}
              {contacto.whatsapp && <li><h3>WhatsApp</h3><p>{contacto.whatsapp}</p><a className="button button-primary" href={`https://wa.me/${contacto.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <span className="visually-hidden">(abre en otra pestaña)</span><span aria-hidden="true">↗</span></a></li>}
            </ul>
          ) : (
            <p className="availability-note">Próximamente publicaremos aquí nuestro correo y número de atención.</p>
          )}
          <Link className="text-link" to="/cursos">Ver información de cursos <span aria-hidden="true">→</span></Link>
        </section>
      ) : (
        <>
          {apartado.slug === "cursos" && (
            <p className="availability-note">Próximamente compartiremos el catálogo de cursos. En esta sección encontrarás orientación para preparar tu elección.</p>
          )}
          {renderSeccionEspecial() || (
            <>
              {esPrivacidad && (
                <p className="availability-note" role="note">
                  Borrador pendiente de revisión: antes de publicarlo, Montreal debe confirmar su denominación legal, domicilio, procedimiento de solicitudes y las prácticas de su proveedor de alojamiento.
                </p>
              )}
              <div className="element-grid information-grid">
                {contenidos[apartado.slug].map(({ titulo, texto }) => (
                  <section className="element-card" key={titulo}>
                    <h2>{titulo}</h2>
                    <p>{texto}</p>
                  </section>
                ))}
              </div>
              <div className="section-action">
                <Link className="button button-primary" to={esPrivacidad ? "/contactanos" : "/contactanos"}>
                  {esPrivacidad ? "Contactar sobre privacidad" : "Contáctanos"} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </>
          )}
        </>
      )}
      <Link className="text-link" to="/">← Volver a Inicio</Link>
    </div>
  );
}

export default Apartado;
