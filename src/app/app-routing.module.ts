import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";
import {LoginComponent} from "./login/login.component";
import {BuscarProductosComponent} from "./Components/buscar-productos/buscar-productos.component";
import {CrearProductoComponent} from "./Components/crear-producto/crear-producto.component";
import {MostrarProductoComponent} from "./mostrar-producto/mostrar-producto.component";
import {MiCarritoComponent} from "./mi-carrito/mi-carrito.component";
import {ConfirmarCompraComponent} from "./confirmar-compra/confirmar-compra.component";

const routes: Routes = [

  {
    path:"home",
    component:HomeComponent
  },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  {
    path:"test",
    component:TestComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"productos/buscar",
    component: BuscarProductosComponent
  },
  {
    path:"productos/crear",
    component:CrearProductoComponent
  },
  {
    path:"productos/:id",
    component:MostrarProductoComponent
  },
  {
    path:"miCarrito",
    component:MiCarritoComponent
  },
  {
    path:"compra/confirmar",
    component:ConfirmarCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
