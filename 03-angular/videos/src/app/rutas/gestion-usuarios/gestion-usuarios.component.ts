import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [
    {id: 1, nombre: 'Adrian'},
    {id: 2, nombre: 'Vicente'},
  ];
  constructor() { }

  ngOnInit() {
  }
  hola(usuario: Usuario) {
    console.log(usuario);
    const index = this.usuarios.findIndex((user) => {
      return user.id === usuario.id;
    });
    this.usuarios.splice(index, 1);
  }
}

interface Usuario {
  nombre?: string;
  id?: number;
}
