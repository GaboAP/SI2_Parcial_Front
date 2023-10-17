import { Component } from '@angular/core';
import {CarroService} from "../services/carro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.css']
})
export class MiCarritoComponent {
carritoData:any;
idCarrito=localStorage.getItem('idCarritoActivo');
  constructor(private carritoService:CarroService,
              private route: Router){};
  ngOnInit(){
    this.carritoService.getByCarritoId(this.idCarrito).subscribe(
      (response:any)=>{
        console.log(response.data)
        this.carritoData=response.data;
      },(error)=>{
        console.log(error);
      }
    )
  }
  mostrarConfirmacion() {
    const confirmacion = window.confirm('¿Estás seguro de realizar la compra?');

    if (confirmacion) {
      // El usuario hizo clic en "Aceptar"
      this.route.navigate(["compra/confirmar"])
    } else {
      // El usuario hizo clic en "Cancelar" o cerró la alerta
      // Puedes agregar código adicional si es necesario
    }
  }
  quitarDelCarro(idDetalle:any){
    console.log(idDetalle)
    this.carritoService.quitarDelCarro(idDetalle).subscribe(
      (response:any)=>{
        console.log(response.message);
        window.location.reload();
      },(error)=>{
        console.log(error);
      }
    )
  }
}
