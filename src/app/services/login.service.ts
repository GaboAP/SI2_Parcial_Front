import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private requestService: RequestService) { }
  login(userData:any):Observable<any>{
    return this.requestService.post("/login",userData)
  }
  logout(id:number):Observable<any>{
    return this.requestService.post("/logout",id)
  }

}
