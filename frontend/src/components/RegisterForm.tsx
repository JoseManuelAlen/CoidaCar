import { Link } from 'react-router'
import './Formulario.css'

// Tarjeta con el formulario de registro.
// Por ahora solo es visual: el botón todavía no hace nada.
function RegisterForm() {
  return (
    <form className="formulario" onSubmit={(evento) => evento.preventDefault()}>
      <h2 className="formulario-titulo">Crea tu cuenta</h2>

      {/* Nombre y Apellidos en la misma línea */}
      <div className="formulario-fila">
        <div className="formulario-campo">
          <label className="formulario-etiqueta" htmlFor="nombre">
            Nombre
          </label>
          <input className="formulario-input" id="nombre" type="text" />
        </div>

        <div className="formulario-campo">
          <label className="formulario-etiqueta" htmlFor="apellidos">
            Apellidos
          </label>
          <input className="formulario-input" id="apellidos" type="text" />
        </div>
      </div>

      <label className="formulario-etiqueta" htmlFor="email">
        Email
      </label>
      <input className="formulario-input" id="email" type="email" />

      <label className="formulario-etiqueta" htmlFor="usuario">
        Usuario
      </label>
      <input className="formulario-input" id="usuario" type="text" />

      <label className="formulario-etiqueta" htmlFor="contrasena">
        Contraseña
      </label>
      <input className="formulario-input" id="contrasena" type="password" />

      <label className="formulario-etiqueta" htmlFor="repetir-contrasena">
        Repetir contraseña
      </label>
      <input className="formulario-input" id="repetir-contrasena" type="password" />

      <button className="boton boton-principal" type="submit">
        Registrarse
      </button>

      <p className="formulario-texto">
        ¿Ya tienes una cuenta?{' '}
        <Link className="formulario-enlace" to="/">
          Inicia sesión
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
