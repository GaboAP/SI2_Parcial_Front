import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//para hacer llamados
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SI2_Parcial_Front';
  apiRoute="http://127.0.0.1:8000/api";
  categoria='';
  categoriaCreada='';
  userData = {
    email: '',
    password: ''
  };
  logged='';
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get(this.apiRoute+"/echo").subscribe(
      (response:any)=>{
        console.log(response.message)
        this.title=response.message
      },
      (error)=>{
        this.title="Error en el back-end"
      }
    )
  }
  saludar(){
    this.http.post(
      "http://127.0.0.1:8000/api/echo",
      {
        nombre: this.title
      }
      ).subscribe(
      (response:any)=>{
        console.log(response.message)
        this.title=response.message
      },
      (error)=>{
        console.log(error)
        this.title="Error en el back-end"
      }
    )
  }
  newCategoria(){
    this.http.post(
      this.apiRoute+"/categoria",
      {
        nombre: this.categoria
      }
      ).subscribe(
      (response:any)=>{
        console.log(response.message)
        this.categoriaCreada=this.categoria
      },
      (error)=>{
        console.log(error)
        this.categoria="Error en el back-end"
      }
    )
  }
}

