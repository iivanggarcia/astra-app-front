import { Component } from '@angular/core';
import { ServicioComponent } from '../servicio/servicio.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-suscrito',
  templateUrl: './dialog-suscrito.component.html',
  styleUrls: ['./dialog-suscrito.component.css']
})
export class DialogSuscritoComponent {

  constructor(
    public dialogRef: MatDialogRef<ServicioComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
