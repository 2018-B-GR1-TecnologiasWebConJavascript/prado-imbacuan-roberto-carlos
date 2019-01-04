import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  usuarios: Usuario[] = [
    {id: 1, nombre: 'Adrian'},
    {id: 2, nombre: 'Vicente'},
  ];
  constructor() { }
  eloiminar(usuario: Usuario) {
    console.log(usuario);
    const index = this.usuarios.findIndex((user) => {
      return user.id === usuario.id;
    });
    const usuarioBorrado = JSON.parse(JSON.stringify(this.usuarios[index]))
    this.usuarios.splice(index, 1);
  }
  regsitroActual = 3;
  crear(nuevoUsuario: Usuario) {
    nuevoUsuario.id  = this.regsitroActual + 1;
    this.usuarios.push(nuevoUsuario);
    this.regsitroActual++;
  }
  actualizar(id: number, usuarioAxtualizado: Usuario) {
    const indiceUsuario = this.usuarios.findIndex((usuario) => {
      return usuario.id === id;
    });
    this.usuarios[indiceUsuario] = usuarioAxtualizado;
  }
  buscar(id: number) {
    return this.usuarios.find((usuario) => {
      usuario.id == id
    })
  }
}
export interface UsuarioInterface {
  nombre?: string;
  id?: number;
}
