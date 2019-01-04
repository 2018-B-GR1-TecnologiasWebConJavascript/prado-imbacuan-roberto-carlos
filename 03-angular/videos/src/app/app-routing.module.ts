import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { PerfilComponent } from './rutas/perfil/perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { LoginComponent } from './rutas/login/login.component';
import {GestionUsuariosComponent} from './rutas/gestion-usuarios/gestion-usuarios.component';
import {GestionProductosComponent} from './rutas/gestion-productos/gestion-productos.component';
import {CrearUsuarioComponent} from './rutas/crear-usuario/crear-usuario.component';
import {CrearProductoComponent} from './rutas/crear-producto/crear-producto.component';
import {ActualizarUsuarioComponent} from './rutas/actualizar-usuario/actualizar-usuario.component';
import {ActualizarProductoComponent} from './rutas/actualizar-producto/actualizar-producto.component';
import {VerDetalleUsuarioComponent} from "./rutas/ver-detalle-usuario/ver-detalle-usuario.component";

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'no-encontrado', component: Ruta404Component},
  { path: 'menu', component: MenuComponent,
    children: [
      { path: '', redirectTo: 'gestion-productos', pathMatch: 'full'},
      {
        path: 'gestion-usuarios',
        component: GestionUsuariosComponent,
        children: [
          { path: 'crear-usuario', component: CrearUsuarioComponent},
          { path: 'actualizar-usuario', component: ActualizarUsuarioComponent},
        ]
      },
      {
        path: 'gestion-productos',
        component: GestionProductosComponent,
        children: [
          { path: 'crear-producto', component: CrearProductoComponent},
          { path: 'actualizar-producto', component: ActualizarProductoComponent},
        ]
      },
      {path: 'ver-usuario:id', component: VerDetalleUsuarioComponent}
    ]
  },
  { path: '**', redirectTo: 'no-encontrado', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
