import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuscritoComponent } from '../dialog-suscrito/dialog-suscrito.component';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  @Input() initS: any = {};

  abrirModalSuscrito(){
    console.log("dentro del suscrito");
    const dialogRef = this.dialog.open(DialogSuscritoComponent, {
      height: '20%',
      width: '30%',
    });
  }
}
