# Montreal · Formación y aprendizaje

## Ejecutar

Desde la raíz del proyecto:

```powershell
cd frontend
npm install
npm start
```

Abre http://localhost:3000. Todas las dependencias necesarias, incluidos React Router y Bootstrap, están declaradas en `frontend/package.json`.

## Archivos

- `src/componentes/Navbar.jsx`: marca Montreal, menú móvil y enlaces a las secciones del sitio.
- `src/componentes/Footer.jsx`: redes sociales, enlace al aviso de privacidad y año automático de derechos reservados.
- `src/componentes/Inicio.jsx`: presentación y tarjetas de las secciones del sitio.
- `src/componentes/Apartado.jsx`: contenido de cada apartado, orientación sobre cursos y enlaces de contacto.
- `src/App.js`: distribución general, rutas, apartados, contacto y configuración de redes sociales.
- `src/App.css` y `src/index.css`: estilos y colores.

Las rutas son `/`, `/mision-y-vision`, `/sobre-nosotros`, `/cursos`, `/contactanos`, `/nuestros-productos`, `/aliados-estrategicos`, `/galeria`, `/testimonios` y `/aviso-de-privacidad`. Para alojar el resultado como sitio estático, configura el servidor para devolver `index.html` al abrir estas rutas directamente.

Las páginas de productos, aliados, galería y testimonios muestran un aviso informativo hasta que se agregue contenido oficial. El aviso de privacidad es un borrador: antes de publicarlo, confirma la denominación legal y domicilio del responsable, el procedimiento de solicitudes y las prácticas del proveedor de alojamiento.

## Colores

La paleta se define en `src/index.css`. El blanco predomina en las superficies; azul y morado forman la base de navegación, títulos y tarjetas. El amarillo contrasta con el morado y destaca los botones principales.

Los tonos oscuros se usan para texto sobre fondos claros, y el blanco o amarillo sobre bloques oscuros. Las combinaciones de texto y fondo de la paleta se comprobaron con una relación de contraste mínima de 4.5:1.

## Redes sociales

La configuración de las redes sociales está en el arreglo `redesSociales` de `src/App.js`. Facebook e Instagram tienen enlaces genéricos y YouTube se muestra como próxima; para configurar las cuentas oficiales, sustituye cada `url` por la URL oficial completa (`https://...`). Los enlaces configurados se abren en una nueva pestaña.

## Contenido y contacto

Los textos de Misión y visión y Sobre nosotros son una propuesta inicial y pueden editarse en `src/componentes/Apartado.jsx`. El catálogo de cursos se muestra como próximo hasta contar con la oferta oficial. Los contenidos pendientes y el borrador de privacidad también se administran en ese archivo.

El objeto `contacto` de `src/App.js` contiene el correo `atlacomulcomontreal@gmail.com` y el WhatsApp `+52 722 572 0866`. Los botones abren el cliente de correo y la conversación de WhatsApp; el sitio no almacena ni envía mensajes por sí mismo.

## Verificar y compilar

Desde `frontend`:

```powershell
npm test -- --watchAll=false --runInBand
npm run build
```

La compilación para producción se genera en `frontend/build`.

La configuración de Jest resuelve `react-router/dom` para el entorno de pruebas de Create React App; `setupTests.js` proporciona las API TextEncoder y TextDecoder que necesita React Router.
