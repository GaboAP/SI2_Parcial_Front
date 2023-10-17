import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private requestService: RequestService) { }
  getByCarritoId(idCarrito:any):Observable<any>{
    return this.requestService.post("/detalleCompra/get",{idCarrito: idCarrito})
  }
  anhadir(idProducto:any,cantidad:number,idCarrito:number,idUsuario:number):Observable<any>{
    return this.requestService.post("/detalleCompra/create", {idProducto: idProducto,
                                                                        cantidad: cantidad,
                                                                        idCarrito:idCarrito,
                                                                        idUsuario:idUsuario});
  }
  quitarDelCarro(id:any){ //id del detalle compra
    return this.requestService.delete("/detalleCompra",id);
  }
}
