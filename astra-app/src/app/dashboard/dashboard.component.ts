import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  constructor(
    private categoriasService: CategoriasService
  ) {}

  idCategoria = 0;
  nombreCategoria = "";
  items = [1,2,3,4,5,6]
  panelOpenState = false;

  servicios = [{"id_servicio": "1", "id_categoria": "1", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de secion", "system_status": "green"}, {"id_servicio": "2", "id_categoria": "1", "nombre_servicio": "Uploads/Dowloads", "descripcion": "Actualizaciones y descargas de novedades", "system_status": "yellow"}];

  ngOnInit(): void {
    this.categoriasService.idCategoria.subscribe((resIdCategoria: number) => {
      console.log(resIdCategoria);
      this.idCategoria= resIdCategoria;
    });

    this.categoriasService.nombreCategoria.subscribe((resNombreCategoria: string) => {
      console.log(resNombreCategoria);
      this.nombreCategoria= resNombreCategoria;
    });
  }


}
