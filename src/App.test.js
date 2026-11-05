import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

test("permite consultar los apartados y volver a Inicio desde el menú", () => {
  render(<App />);
  const menu = screen.getByRole("navigation", { name: "Navegación principal" });
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("El siguiente paso");
  expect(screen.queryByText(/Desarrollo Web|Desarrollo Móvil/)).not.toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(9);
  [
    "Misión y visión",
    "Sobre nosotros",
    "Cursos",
    "Contáctanos",
    "Nuestros productos",
    "Aliados estratégicos",
    "Galería",
    "Testimonios de clientes",
    "Aviso de privacidad"
  ].forEach((nombre) => {
    fireEvent.click(within(menu).getByRole("link", { name: nombre }));
    expect(screen.getByRole("heading", { level: 1, name: nombre })).toBeInTheDocument();
    expect(within(menu).getByRole("link", { name: nombre })).toHaveAttribute("aria-current", "page");
    expect(document.title).toBe(`${nombre} | Montreal`);
  });
  expect(screen.getByRole("link", { name: "atlacomulcomontreal@gmail.com" })).toHaveAttribute("href", "mailto:atlacomulcomontreal@gmail.com");
  expect(screen.getByRole("link", { name: /Escríbenos por WhatsApp/ })).toHaveAttribute("href", "https://wa.me/527225720866");
  expect(screen.getByRole("main")).toHaveFocus();
  fireEvent.click(within(menu).getByRole("link", { name: "Inicio" }));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("El siguiente paso");
});

test("abre el menú y lo cierra al seleccionar una opción o pulsar Escape", () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Abrir menú" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(toggle, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  fireEvent.click(toggle);
  const menu = screen.getByRole("navigation", { name: "Navegación principal" });
  fireEvent.click(within(menu).getByRole("link", { name: "Cursos" }));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test.each([
  ["/mision-y-vision", "Misión y visión"],
  ["/sobre-nosotros", "Sobre nosotros"],
  ["/cursos", "Cursos"],
  ["/contactanos", "Contáctanos"],
  ["/nuestros-productos", "Nuestros productos"],
  ["/aliados-estrategicos", "Aliados estratégicos"],
  ["/galeria", "Galería"],
  ["/testimonios", "Testimonios de clientes"],
  ["/aviso-de-privacidad", "Aviso de privacidad"]
])("admite abrir directamente %s", (ruta, nombre) => {
  window.history.replaceState({}, "", ruta);
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: nombre })).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toHaveTextContent("Todos los derechos reservados");
  expect(screen.getByRole("contentinfo")).toHaveTextContent("Facebook");
});

test("identifica el borrador de privacidad y no inventa testimonios", () => {
  window.history.replaceState({}, "", "/aviso-de-privacidad");
  const { unmount } = render(<App />);
  expect(screen.getByRole("note")).toHaveTextContent("Borrador pendiente de revisión");
  unmount();

  window.history.replaceState({}, "", "/testimonios");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Estamos preparando esta sección" })).toBeInTheDocument();
  expect(screen.queryByText(/cliente satisfecho/i)).not.toBeInTheDocument();
});

test("muestra una salida útil para una ruta desconocida", () => {
  window.history.replaceState({}, "", "/elementos/no-existe");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: "Página no encontrada" })).toBeInTheDocument();
  fireEvent.click(within(screen.getByRole("main")).getByRole("link", { name: "Volver a Inicio" }));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("El siguiente paso");
});
