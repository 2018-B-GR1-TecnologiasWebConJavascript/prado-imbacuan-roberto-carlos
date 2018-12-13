import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { PerfilComponent } from './rutas/perfil/perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { LoginComponent } from './rutas/login/login.component';
import { GestionUsuariosComponent } from './rutas/gestion-usuarios/gestion-usuarios.component';
import { GestionProductosComponent } from './rutas/gestion-productos/gestion-productos.component';
import { CrearUsuarioComponent } from './rutas/crear-usuario/crear-usuario.component';
import { CrearProductoComponent } from './rutas/crear-producto/crear-producto.component';
import { ActualizarUsuarioComponent } from './rutas/actualizar-usuario/actualizar-usuario.component';
import { ActualizarProductoComponent } from './rutas/actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerfilComponent,
    Ruta404Component,
    MenuComponent,
    LoginComponent,
    GestionUsuariosComponent,
    GestionProductosComponent,
    CrearUsuarioComponent,
    CrearProductoComponent,
    ActualizarUsuarioComponent,
    ActualizarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
