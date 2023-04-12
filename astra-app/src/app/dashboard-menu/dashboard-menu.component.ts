import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoriasService } from '../categorias.service';

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
    ) {}

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe( (resCat: any) => {
      //this.categorias = resCat;
      console.log(resCat);
    });
  }

  categorias: any = [{"id_categoria":"1","nombre_categoria":"Box Web Application"},{"id_categoria":"2","nombre_categoria":"Box Platform - API"},{"id_categoria":"3","nombre_categoria":"Desktop Applications"},{"id_categoria":"4","nombre_categoria":"Mobile Applications"},{"id_categoria":"5","nombre_categoria":"Box Notes"},{"id_categoria":"6","nombre_categoria":"Box Relay"},{"id_categoria":"7","nombre_categoria":"Partners - Integrations"},{"id_categoria":"8","nombre_categoria":"Box Community and Support Website"},{"id_categoria":"9","nombre_categoria":"Developer Console - Docs"},{"id_categoria":"10","nombre_categoria":"FTP"}];


  cambiaCategoria(id: number, nombre: string){
    this.categoriasService.actualizarCategoria(id, nombre);
  }
}
