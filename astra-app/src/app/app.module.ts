import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ServicioComponent } from './servicio/servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogIncidenciaComponent } from './dialog-incidencia/dialog-incidencia.component';
import { DialogSuscritoComponent } from './dialog-suscrito/dialog-suscrito.component';
import { HistorialIncidenciasComponent } from './historial-incidencias/historial-incidencias.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardMenuComponent,
    ServicioComponent,
    DialogIncidenciaComponent,
    DialogSuscritoComponent,
    HistorialIncidenciasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
