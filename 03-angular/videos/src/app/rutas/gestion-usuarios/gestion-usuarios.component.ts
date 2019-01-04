import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private readonly usuarioService: UsuarioServiceService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.usuarios;
  }
  eliminar(usuario: Usuario) {
    console.log(usuario);
    this.usuarioService.eloiminar(usuario);
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
}

interface Usuario {
  nombre?: string;
  id?: number;
}
