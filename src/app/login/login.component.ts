import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginService} from "../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiRoute="http://127.0.0.1:8000/api";
  userData = {
    email: '',
    password: ''
  };
  constructor(private loginService: LoginService,
              private router: Router) {}
  login(){
    const postData = {
      email: this.userData.email,
      password: this.userData.password
    };
    this.loginService.login(postData).subscribe((response:any)=>{
        localStorage.setItem('usuariologeado',response.message)
        localStorage.setItem('idCarritoActivo',response.idCarrito)
        console.log(response.message+" el Id del carro es: "+response.idCarrito)
        this.router.navigate(['/productos/buscar']);
      },
      (error)=>{
        console.log(error)
      })
  }
}
