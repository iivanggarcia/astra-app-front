import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private categoriaService: CategoriasService,
    private router: Router
  ) { }
  
  logeado = false;
  ngOnInit(): void {
    if(localStorage.getItem('inicioSesion') != null){
      this.logeado = true;
      this.categoriaService.validarLogin();
    }
    this.categoriaService.logeado.subscribe( (resLogeado) => {
      this.logeado = resLogeado;
    });
  }
  title = 'astra-app';
}
