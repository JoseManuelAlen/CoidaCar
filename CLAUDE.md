# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

CoidaCar es una aplicación web para registrar el mantenimiento de vehículos. Se está construyendo poco a poco: de momento existen las pantallas de inicio de sesión, registro y «Mi garaje». Solo funciona el inicio de sesión; el resto es únicamente visual.

- `frontend/`: React + TypeScript con Vite.
- `backend/` (previsto, aún no existe): Java con Spring Boot.

## Forma de trabajar

- El usuario está aprendiendo a programar. Escribe código simple y claro, con comentarios breves en español que expliquen la intención.
- **Consulta antes de tomar cualquier decisión**, sobre todo las de apariencia de la interfaz. Si algo no está en la referencia, pregunta antes de inventarlo.
- No hagas commits. El usuario revisa los cambios y hace los commits él mismo.
- Al terminar una tarea, da un resumen de 3 o 4 líneas e indica cualquier cosa que hayas decidido sin consultar.

## Comandos (desde `frontend/`)

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo de Vite
npm run build     # comprobar tipos (tsc -b) y generar dist/
npm run lint      # oxlint
npm run preview   # servir el build generado
```

Todavía no hay tests. La herramienta prevista es **Vitest**; consulta antes de instalarla.

## Arquitectura del frontend

- La navegación usa **React Router** (paquete `react-router`). Las rutas están definidas en `App.tsx`: `/` (login), `/registro` y `/garaje`. Para enlazar páginas se usa `<Link to="...">`, no `<a href>`.
- Sesión simulada (todavía no hay backend) en `src/sesion.ts`: el único usuario válido es `admin` / `admin`, y la sesión se guarda en `localStorage`. Las páginas privadas comprueban `haySesion()` y, si no hay sesión, redirigen a `/` con `<Navigate>`. El `Header` muestra «Mi garaje» y «Cerrar sesión» solo cuando hay sesión; usa `useLocation()` para volver a dibujarse al cambiar de página.
- `src/pages/`: una página por ruta. Cada página envuelve su formulario en `PaginaConFoto`.
- `src/components/PaginaConFoto.tsx`: plantilla común con el título y el subtítulo a la izquierda, el formulario (que recibe como `children`) debajo, y la foto a la derecha. Las páginas nuevas de este tipo deben reutilizarla.
- `src/components/Formulario.css`: estilos compartidos por todos los formularios (`formulario-*`). Los botones (`boton`, `boton-principal`) son globales y están en `src/index.css`. Para poner dos campos en la misma línea se usa `formulario-fila` con un `formulario-campo` por cada campo.

## Estilos

- CSS normal: un archivo `.css` junto a cada componente o página, que se importa desde su `.tsx`. No se usa Tailwind ni CSS Modules.
- Los colores y las fuentes son variables CSS definidas en `src/index.css` (`--color-verde`, `--color-fondo`, `--fuente-titulo`...). Úsalas en lugar de escribir los valores directamente.
- Tipografías de Google Fonts, cargadas en `index.html`: Fraunces para el título principal y DM Sans para el resto.
- Las clases CSS siguen el patrón `componente-elemento` en español (`formulario-input`, `pagina-foto`).
- En móvil (menos de 768 px) se oculta la foto de `PaginaConFoto`.
- La foto del coche (`src/assets/coche.jpg`) es de Unsplash, con licencia libre.

## Convenciones

- Nombres de variables, clases CSS y comentarios en español. Los componentes en PascalCase y exportados con `export default`.
