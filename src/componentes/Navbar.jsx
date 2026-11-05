import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ apartados }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <nav className="site-container main-nav" aria-label="Navegación principal">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
          <img className="brand-logo" src="/logo-montreal.jpeg" alt="" aria-hidden="true" />
          <span>Montreal <b>Atlacomulco</b></span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
          {isOpen ? "Cerrar menú" : "Abrir menú"}
        </button>
        <ul id="menu-principal" className={`nav-links${isOpen ? " is-open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setIsOpen(false)}>Inicio</NavLink></li>
          {apartados.map((apartado) => (
            <li key={apartado.slug}>
              <NavLink to={`/${apartado.slug}`} onClick={() => setIsOpen(false)}>
                {apartado.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
