import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styleUrls: ['./buscar-productos.component.css']
})
export class BuscarProductosComponent {
    apiRoute="http://127.0.0.1:8000/api";
    nombreProducto= '';
    productosCreados:any[]=[];
    data=Object.values(this.productosCreados);
    created=false;
    constructor(private productoService: ProductoService,
                private router: Router) {}
  buscar(){
    this.productoService.buscar(this.nombreProducto).subscribe(
        (response:any)=>{
          console.log(response.data.data)
          this.data=response.data.data
          this.created=true;
        },
        (error)=>{
          console.log(error);
        }
    )
  }
}
