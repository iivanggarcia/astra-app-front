import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe((resCat: any) => {
      //this.categorias = resCat;
      console.log(resCat);
    });
  }

  categorias: any = [
    { "id_categoria": "1", "nombre_categoria": "Box Web Application", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    { "id_categoria": "2", "nombre_categoria": "Box Platform - API", "system_status": "yellow", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "3", "nombre_categoria": "Desktop Applications", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "4", "nombre_categoria": "Mobile Applications", "system_status": "red", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "5", "nombre_categoria": "Box Notes", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "6", "nombre_categoria": "Box Relay", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "7", "nombre_categoria": "Partners - Integrations", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "8", "nombre_categoria": "Box Community and Support Website", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "9", "nombre_categoria": "Developer Console - Docs", "system_status": "green", "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { "id_categoria": "10", "nombre_categoria": "FTP", "system_status": "green" }];


  cambiaCategoria(id: number, nombre: string, descripcion: string) {
    this.categoriasService.actualizarCategoria(id, nombre, descripcion);
  }

  redireccionaHome(){
    //Router navigate -> home
  }
}
