import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-historial-incidencias',
  templateUrl: './historial-incidencias.component.html',
  styleUrls: ['./historial-incidencias.component.css']
})
export class HistorialIncidenciasComponent implements OnInit{
  
  panelOpenState = false;
  historial: any[] = [];

  constructor(
    private categoriasService: CategoriasService
  ) { }
  
  ngOnInit(): void {
    this.historial = this.categoriasService.obtenerHistorialIncidencias();
  }


}
