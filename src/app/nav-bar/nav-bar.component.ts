import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  logged:any=0;
  constructor(private loginService:LoginService) {
  }
  ngOnInit(){

  }
  logout(){
    this.loginService.logout(this.logged)
    localStorage.removeItem('usuarioLogeado');
    this.logged=null;
    console.log(this.logged)
  }
}
