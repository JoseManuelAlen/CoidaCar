// Funciones para gestionar la sesión del usuario.
// De momento no hay backend: el único usuario válido es admin / admin
// y la sesión se guarda en el localStorage del navegador.

const CLAVE_SESION = 'coidacar-sesion'

// Comprueba el usuario y la contraseña. Si son correctos guarda la sesión y devuelve true.
export function iniciarSesion(usuario: string, contrasena: string): boolean {
  if (usuario === 'admin' && contrasena === 'admin') {
    localStorage.setItem(CLAVE_SESION, usuario)
    return true
  }
  return false
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION)
}

export function haySesion(): boolean {
  return localStorage.getItem(CLAVE_SESION) !== null
}
