import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private categoriaService: CategoriasService
  ) { }
  
  logeado = false;
  ngOnInit(): void {
    this.logeado = this.categoriaService.logeado;
  }
  title = 'astra-app';
}
