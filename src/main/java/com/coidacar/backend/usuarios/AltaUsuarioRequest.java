package com.coidacar.backend.usuarios;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AltaUsuarioRequest(
        @NotBlank @Size(max = 100) String nombre,
        @Size(max = 150) String apellidos,
        @NotBlank @Email @Size(max = 150) String email) {
}
