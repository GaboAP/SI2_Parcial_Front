import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private requestService: RequestService) { }
  buscar():Observable<any>{
    return this.requestService.get("/productos/search")
  }
  index():Observable<any>{
    return this.requestService.get("/categoria")
  }

}
