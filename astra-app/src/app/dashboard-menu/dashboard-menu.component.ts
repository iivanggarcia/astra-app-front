import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  categorias: any = [
    {nombre:"categoría 1" , estado:"funciona"},
    {nombre:"categoría 2" , estado:"funciona"},
    {nombre:"categoría 3" , estado:"funciona"},
    {nombre:"categoría 4" , estado:"funciona"},
    {nombre:"categoría 5" , estado:"funciona"},
    {nombre:"categoría 6" , estado:"funciona"}
  ]
}
