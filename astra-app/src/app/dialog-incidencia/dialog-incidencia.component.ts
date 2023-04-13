import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-dialog-incidencia',
  templateUrl: './dialog-incidencia.component.html',
  styleUrls: ['./dialog-incidencia.component.css']
})
export class DialogIncidenciaComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DashboardComponent>,
    private categoriasService: CategoriasService
  ) { }

  fakeDataIncidencias: { "id_servicio": string; "id_categoria": string; "nombre_servicio": string; "descripcion": string; "system_status": string; }[] = [];

  ngOnInit(): void {
    this.fakeDataIncidencias = this.categoriasService.obtenerIncidencias();
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
