import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {ProductoService} from "../services/producto.service";
import {CarroService} from "../services/carro.service";

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent {
  idProducto: number=0
  idUsuarioLogeado:any;
  producto:any;
  cantidadCompra:number=0;
  idCarrito:any;
  constructor(private carroService:CarroService,
              private productoService:ProductoService,
              private ruta: Router,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.idProducto = +this.route.snapshot.paramMap.get('id')!;
    this.idUsuarioLogeado=localStorage.getItem('usuariologeado');
    console.log("El usuario actual es: "+this.idUsuarioLogeado)
    this.productoService.getById(this.idProducto).subscribe(
      (response:any)=>{
        console.log(response.message)
        this.producto=response.data;
      },(error)=>{
        console.log(error);
      }
    )
    console.log(this.idProducto)
  }
  anhadirAlCarro(){
    if (this.cantidadCompra>0){

      this.idCarrito=localStorage.getItem('idCarritoActivo')!;
      this.carroService.anhadir(this.producto.idProducto,this.cantidadCompra,this.idCarrito,this.idUsuarioLogeado).
      subscribe((response:any)=>{
          console.log(response.message+ "id de DC: "+response.id+" id Carrito: "+response.idCarrito)
          localStorage.setItem('idCarritoActivo',response.idCarrito);
          this.idCarrito=localStorage.getItem('idCarritoActivo')!;
          window.confirm("Producto añadido al carro!")
        },
        (error)=>{
          console.log(error)
        });
    }else{
      console.log("cantidad en 0, porfavor agregue elementos al carro")
    }
  }
}
