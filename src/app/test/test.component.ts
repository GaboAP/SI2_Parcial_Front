import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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
        this.categoriaCreada=this.categoria +" de id "+ response.id;
      },
      (error)=>{
        console.log(error)
        this.categoria="Error en el back-end"
      }
    )
  }
  login(){

    const postData = {
      email: this.userData.email,
      password: this.userData.password
    };
    this.http.post(this.apiRoute+"/login", postData).
    subscribe((response:any)=>{
        console.log(response.message)
        this.logged=response.message;
      },
      (error)=>{
        console.log(error)
        this.logged='No se pudo iniciar sesion :c'
      })
  }
  logout(){
    this.http.post(this.apiRoute+"/logout",""). subscribe((response:any)=>{
      console.log(response.message)
      this.logged=response.message;
    })
  }

}
