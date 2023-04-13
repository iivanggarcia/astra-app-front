import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogIncidenciaComponent } from '../dialog-incidencia/dialog-incidencia.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(
    private categoriasService: CategoriasService,
    public dialog: MatDialog
  ) { }

  idCategoria = 0;
  nombreCategoria = "";
  descripcionCategoria = "";

  servicios = [{}];

  inicidenciaAmbar = true;
  inicidenciaRoja = true;

  animal: string = "";
  name: string = "";

  ngOnInit(): void {
    this.categoriasService.idCategoria.subscribe((resIdCategoria: number) => {
      this.idCategoria = resIdCategoria;
      console.log("Categoría " + this.idCategoria);
      this.servicios = this.categoriasService.obtenerServicios(this.idCategoria);
      console.log("Servicios ", this.servicios);
    });

    this.categoriasService.nombreCategoria.subscribe((resNombreCategoria: string) => {
      console.log(resNombreCategoria);
      this.nombreCategoria = resNombreCategoria;
    });

    this.categoriasService.descripcionCategoria.subscribe((resDescripcionCategoria: string) => {
      console.log(resDescripcionCategoria);
      this.descripcionCategoria = resDescripcionCategoria;
    });

    if(this.categoriasService.obtenerIncidencias().length > 0){
      this.abrirDialogoIncidencia();
    }
  }

  abrirDialogoIncidencia() {
    const dialogRef = this.dialog.open(DialogIncidenciaComponent, {
      maxHeight: '60%',
      height: 'fit-content',
      width: '45%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
