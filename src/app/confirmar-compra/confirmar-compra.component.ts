import { Component } from '@angular/core';
import {CompraService} from "../services/compra.service";


@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent {
nombre:any;
nit:any;
metodoPago='';
constructor(private compraService:CompraService) {
}
  setMetodo(metodo:string){
      this.metodoPago=metodo;
  }
  comprar(){
    this.compraService.crearCompra(this.nombre,this.nit,this.metodoPago).
    subscribe((response:any)=>{
        console.log(response.message()+" idNotaVenta: "+response.id)
        window.confirm("Compra Realizada!")
    },
      (error)=>{
        console.log(error)
    })
  }
}
