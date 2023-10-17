import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CrearProductoComponent } from './Components/crear-producto/crear-producto.component';
import { BuscarProductosComponent } from './Components/buscar-productos/buscar-productos.component';
import { CrearCategoriaComponent } from './Components/crear-categoria/crear-categoria.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { MiCarritoComponent } from './mi-carrito/mi-carrito.component';
import { ConfirmarCompraComponent } from './confirmar-compra/confirmar-compra.component';
import { RellenarEnvioInfoComponent } from './rellenar-envio-info/rellenar-envio-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavBarComponent,
    LoginComponent,
    CrearProductoComponent,
    BuscarProductosComponent,
    CrearCategoriaComponent,
    MostrarProductoComponent,
    MiCarritoComponent,
    ConfirmarCompraComponent,
    RellenarEnvioInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
