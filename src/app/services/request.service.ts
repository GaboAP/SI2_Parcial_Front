import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
localhost='http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  get(url: string):Observable<any>{
    return this.http.get(this.localhost+url)
  }
  post(url:string,body: any){
    console.log(url,body);
    return this.http.post(this.localhost+url,body);
  }
  delete(url:string,id:any):Observable<any>{
    return this.http.delete(this.localhost+url+"/"+id)
  }
}
