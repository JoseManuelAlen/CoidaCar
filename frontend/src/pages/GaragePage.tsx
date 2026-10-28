import { Navigate } from 'react-router'
import { haySesion } from '../sesion'
import './GaragePage.css'

// Página "Mi garaje": se muestra después de iniciar sesión.
// Por ahora no hay vehículos y el botón "Añadir vehículo" todavía no hace nada.
function GaragePage() {
  // Si no hay sesión iniciada, volvemos al login
  if (!haySesion()) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="garaje">
      <p className="garaje-antetitulo">Todo en orden</p>

      <div className="garaje-cabecera">
        <div>
          <h1 className="garaje-titulo">Mi garaje</h1>
          <p className="garaje-subtitulo">
            Tus coches y motos, reunidos en un solo lugar. Selecciona uno para consultar su
            mantenimiento.
          </p>
        </div>

        <button className="boton boton-principal garaje-boton" type="button">
          Añadir vehículo
        </button>
      </div>

      <div className="garaje-seccion">
        <h2 className="garaje-seccion-titulo">Tus vehículos</h2>
        <span className="garaje-contador">0 vehículos</span>
      </div>

      {/* Mensaje que se muestra cuando todavía no hay vehículos */}
      <div className="garaje-vacio">
        <div className="garaje-vacio-icono">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11M4 11h16v5H4zM6 16v2M18 16v2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="7.5" cy="13.5" r="0.9" fill="currentColor" />
            <circle cx="16.5" cy="13.5" r="0.9" fill="currentColor" />
          </svg>
        </div>
        <h3 className="garaje-vacio-titulo">Tu garaje está esperando</h3>
        <p className="garaje-vacio-texto">
          Añade tu primer coche o moto para empezar a organizarlo todo.
        </p>
      </div>
    </main>
  )
}

export default GaragePage
