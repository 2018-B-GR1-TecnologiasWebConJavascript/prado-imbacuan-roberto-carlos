import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { PerfilComponent } from './rutas/perfil/perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { LoginComponent } from './rutas/login/login.component';
import {GestionUsuariosComponent} from './rutas/gestion-usuarios/gestion-usuarios.component';
import {GestionProductosComponent} from './rutas/gestion-productos/gestion-productos.component';
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'no-encontrado', component: Ruta404Component},
  { path: 'menu', component: MenuComponent,
    children: [
      { path: '', redirectTo: 'gestion-productos', pathMatch: 'full'},
      {path: 'gestion-usuarios', component: GestionUsuariosComponent},
      {path: 'gestion-productos', component: GestionProductosComponent},
    ]
  },
  { path: '**', redirectTo: 'no-encontrado', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
