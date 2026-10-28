import { Link, useLocation, useNavigate } from 'react-router'
import { cerrarSesion, haySesion } from '../sesion'
import './Header.css'

// Cabecera superior con el logo y el nombre de la app.
// Si hay sesión iniciada, muestra también el enlace al garaje y el botón para cerrar sesión.
function Header() {
  const navigate = useNavigate()

  // useLocation hace que la cabecera se vuelva a dibujar cada vez que cambia la página,
  // así se actualiza al iniciar o cerrar sesión.
  useLocation()

  function salir() {
    cerrarSesion()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-contenido">
        <div className="header-marca">
          <div className="header-logo">
            {/* Icono sencillo dibujado en SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M16 4v8a5 5 0 0 1-5 5H9"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="16" cy="4" r="1.6" fill="white" />
              <circle cx="7" cy="17" r="2" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="header-nombre">CoidaCar</span>
        </div>

        {haySesion() && (
          <nav className="header-menu">
            <Link className="header-enlace" to="/garaje">
              Mi garaje
            </Link>
            <button className="header-salir" type="button" onClick={salir}>
              Cerrar sesión
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
