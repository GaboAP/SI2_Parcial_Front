import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private requestService: RequestService) { }
  getById(id:number){
    return this.requestService.get("/productos/"+id);
  }
  buscar(nombre:string):Observable<any>{ //busca productos en base a un nombre
    return this.requestService.post("/productos/search",{nombre:nombre})
  }
  crear(producto:any):Observable<any>{
    return this.requestService.post("/productos/create",producto)
  }
}
