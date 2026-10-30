package com.coidacar.backend.usuarios;

public record UsuarioResponse(Long id, String nombre, String apellidos, String email) {

    static UsuarioResponse from(Usuario usuario) {
        return new UsuarioResponse(usuario.getId(), usuario.getNombre(), usuario.getApellidos(), usuario.getEmail());
    }
}
