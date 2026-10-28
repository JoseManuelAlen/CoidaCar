import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { iniciarSesion } from '../sesion'
import './Formulario.css'

// Tarjeta con el formulario de acceso.
// Si el usuario y la contraseña son correctos, lleva a la página del garaje.
function LoginForm() {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function enviarFormulario(evento: FormEvent) {
    evento.preventDefault()

    if (iniciarSesion(usuario, contrasena)) {
      navigate('/garaje')
    } else {
      setError(true)
    }
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2 className="formulario-titulo">Acceso a tu cuenta</h2>

      <label className="formulario-etiqueta" htmlFor="usuario">
        Usuario
      </label>
      <input
        className="formulario-input"
        id="usuario"
        type="text"
        value={usuario}
        onChange={(evento) => setUsuario(evento.target.value)}
      />

      <label className="formulario-etiqueta" htmlFor="contrasena">
        Contraseña
      </label>
      <input
        className="formulario-input"
        id="contrasena"
        type="password"
        value={contrasena}
        onChange={(evento) => setContrasena(evento.target.value)}
      />

      {error && <p className="formulario-error">Usuario o contraseña incorrectos</p>}

      <button className="boton boton-principal" type="submit">
        Iniciar sesión
      </button>

      <p className="formulario-texto">
        ¿No tienes una cuenta?{' '}
        <Link className="formulario-enlace" to="/registro">
          Regístrate
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
