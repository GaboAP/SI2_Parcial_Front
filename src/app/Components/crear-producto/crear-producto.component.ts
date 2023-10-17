import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductoService} from "../../services/producto.service";
import {CategoriaService} from "../../services/categoria.service";
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
talla='';
idInventario='';
categoriaNombre='';
apiRoute="http://127.0.0.1:8000/api";
producto={
  nombre:'',
  precio:'',
  talla:'',
  color:'',
  foto:'',
  idUsuario:'',
  categoriaId:'',
  cantidad:''
}
inventarios: any[]=[];
categorias:any[]=[];
  constructor(private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private router: Router) {}
  crearProducto(){
    this.producto.idUsuario=localStorage.getItem('usuariologeado')!;
    this.productoService.crear(this.producto).subscribe(
      (response:any)=>{
        console.log(response.message)
        this.router.navigate(['productos/'+response.id])
      },(error)=>{
        console.log(error);
      }
    )
  }
  selectSize(size: string){
    this.talla=size;
    this.producto.talla=size;
  }
  setCategoria(nombre:string,id:string){
    this.categoriaNombre=nombre;
    this.producto.categoriaId=id;
  }
  getCategorias(){
    this.categoriaService.index().subscribe(
      (response:any)=>{
        console.log("Se encontraron las categorias")
        this.categorias=response
      },(error)=>{
        console.log(error);
      }
    )
  }

}
