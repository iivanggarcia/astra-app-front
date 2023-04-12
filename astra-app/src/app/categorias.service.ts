import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  idCategoria = new BehaviorSubject(0);
  nombreCategoria = new BehaviorSubject("");


  actualizarCategoria(id: number, nombre: string){
    this.idCategoria.next(id);
    this.nombreCategoria.next(nombre);
  }

  
  inicioSesion(){

  }

  obtenerCategorias(){
    return this.httpClient.get('https://softley.gosoftware.com.mx/carpJson/var_Categoria.php');
  }
}
