import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import Apartado from "./componentes/Apartado";
import "./App.css";

export const redesSociales = [
  { nombre: "Facebook", icono: "facebook", url: "https://facebook.com" },
  { nombre: "Instagram", icono: "instagram", url: "https://instagram.com" },
  { nombre: "YouTube", icono: "youtube", url: null }
];

export const contacto = {
  correo: "atlacomulcomontreal@gmail.com",
  whatsapp: "+52 722 572 0866"
};

export const apartados = [
  {
    slug: "mision-y-vision",
    menu: "Misión y visión",
    etiqueta: "Nuestro propósito",
    descripcion: "Conoce el propósito que nos mueve y el futuro que queremos construir a través de la formación.",
    enlace: "Conoce nuestro propósito"
  },
  {
    slug: "sobre-nosotros",
    menu: "Sobre nosotros",
    etiqueta: "Nuestra identidad",
    descripcion: "Descubre Montreal, nuestra manera de entender el aprendizaje y nuestro compromiso con tu desarrollo.",
    enlace: "Conoce Montreal"
  },
  {
    slug: "cursos",
    menu: "Cursos",
    etiqueta: "Tu formación",
    descripcion: "Encuentra información para dar el siguiente paso en tu aprendizaje y consultar las opciones de formación.",
    enlace: "Explorar cursos"
  },
  {
    slug: "contactanos",
    menu: "Contáctanos",
    etiqueta: "Sigamos en contacto",
    descripcion: "Acércate a Montreal para resolver tus dudas sobre nuestros cursos y tu proceso de formación.",
    enlace: "Ver información de contacto"
  },
  {
    slug: "nuestros-productos",
    menu: "Nuestros productos",
    etiqueta: "Lo que ofrecemos",
    descripcion: "Conoce los productos y recursos de formación que Montreal pone a tu alcance.",
    enlace: "Conoce nuestros productos"
  },
  {
    slug: "aliados-estrategicos",
    menu: "Aliados estratégicos",
    etiqueta: "Crecer en colaboración",
    descripcion: "Descubre las organizaciones que colaboran con Montreal para impulsar la formación.",
    enlace: "Conoce a nuestros aliados"
  },
  {
    slug: "galeria",
    menu: "Galería",
    etiqueta: "Montreal en imágenes",
    descripcion: "Explora momentos, actividades y espacios relacionados con nuestra comunidad.",
    enlace: "Ver galería"
  },
  {
    slug: "testimonios",
    menu: "Testimonios de clientes",
    etiqueta: "Experiencias Montreal",
    descripcion: "Conoce las experiencias de quienes han confiado en Montreal.",
    enlace: "Leer testimonios"
  },
  {
    slug: "aviso-de-privacidad",
    menu: "Aviso de privacidad",
    etiqueta: "Tu información importa",
    descripcion: "Consulta cómo se gestiona la información cuando te comunicas con Montreal.",
    enlace: "Leer aviso de privacidad"
  }
];

function Contenido() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    const apartado = apartados.find(({ slug }) => pathname === `/${slug}`);
    document.title = `${apartado?.menu || (pathname === "/" ? "Inicio" : "Página no encontrada")} | Montreal`;
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <Navbar apartados={apartados} />
      <main ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Inicio apartados={apartados} />} />
          {apartados.map((apartado) => (
            <Route key={apartado.slug} path={`/${apartado.slug}`} element={<Apartado apartado={apartado} contacto={contacto} />} />
          ))}
          <Route path="*" element={
            <div className="site-container detail-page">
              <div className="detail-heading"><h1>Página no encontrada</h1><p>Explora las secciones de Montreal desde el menú o vuelve al inicio.</p></div>
              <Link className="text-link" to="/">Volver a Inicio <span aria-hidden="true">→</span></Link>
            </div>
          } />
        </Routes>
      </main>
      <Footer redesSociales={redesSociales} />
    </>
  );
}

function App() {
  return <BrowserRouter><Contenido /></BrowserRouter>;
}

export default App;
