import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private requestService: RequestService) { }
  crearCompra(nombre:string,nit:string,metodo:string){
    return this.requestService.post("/notaVenta/create", {nombre:nombre,
                                                                    nit: nit,
                                                                    metodoPago: metodo})
  }
  anhadir(detalle:any):Observable<any>{
    return this.requestService.post("/detalleCompra/create",detalle);
  }

}
