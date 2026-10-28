import type { ReactNode } from 'react'
import fotoCoche from '../assets/coche.jpg'
import './PaginaConFoto.css'

// Plantilla común para login y registro:
// a la izquierda el título, el subtítulo y el formulario que recibe en "children",
// y a la derecha la foto del coche.
function PaginaConFoto({ children }: { children: ReactNode }) {
  return (
    <main className="pagina">
      <section className="pagina-izquierda">
        <h1 className="pagina-titulo">CoidaCar</h1>
        <p className="pagina-subtitulo">Gestiona el mantenimiento de tus vehículos.</p>
        {children}
      </section>

      <section className="pagina-derecha">
        <img className="pagina-foto" src={fotoCoche} alt="Coche clásico de color verde" />
      </section>
    </main>
  )
}

export default PaginaConFoto
