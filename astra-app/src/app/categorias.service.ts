import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  idCategoria = new BehaviorSubject(0);
  nombreCategoria = new BehaviorSubject("");
  descripcionCategoria = new BehaviorSubject("");


  actualizarCategoria(id: number, nombre: string, descripcion: string) {
    this.idCategoria.next(id);
    this.nombreCategoria.next(nombre);
    this.descripcionCategoria.next(descripcion);
  }


  inicioSesion() {

  }

  obtenerCategorias() {
    return this.httpClient.get('https://softley.gosoftware.com.mx/json/var_Categoria.php').pipe(
      map((val) => {
        console.log("resultado categorías", val);
      })
    )
  }

  obtenerIncidencia() {
    return this.httpClient.get('https://softley.gosoftware.com.mx/json/var_Incidencias.php').pipe(
      map((val) => {
        console.log("resultado incidencias", val);
      })
    )
  }

  obtenerServicio() {
    return this.httpClient.get('https://softley.gosoftware.com.mx/json/var_Servicios.php?id_categoria=1').pipe(
      map((val) => {
        console.log("resultado servicios", val);
      })
    )
  }

  obtenerStatusGeneral() {
    return this.httpClient.get('https://softley.gosoftware.com.mx/json/var_StatusGeneral.php').pipe(
      map((val) => {
        console.log("resultado status general", val);
      })
    )
  }

  obtenerUsuarios() {
    return this.httpClient.get('https://softley.gosoftware.com.mx/json/var_Usuarios.php?num_telefono=5534544066&password=456').pipe(
      map((val) => {
        console.log("resultado usuarios", val);
      })
    )
  }
  servicios1 = [{ "id_servicio": "1", "id_categoria": "1", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de sesión", "system_status": "green" }, { "id_servicio": "2", "id_categoria": "1", "nombre_servicio": "Uploads/Dowloads", "descripcion": "Actualizaciones y descargas de novedades", "system_status": "green" }];
  servicios2 = [{ "id_servicio": "3", "id_categoria": "2", "nombre_servicio": "Content API", "descripcion": "API de contenidos", "system_status": "yellow" }];
  servicios3 = [{ "id_servicio": "4", "id_categoria": "3", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de sesión", "system_status": "green" }, { "id_servicio": "5", "id_categoria": "1", "nombre_servicio": "Uploads/Dowloads", "descripcion": "Actualizaciones y descargas de novedades", "system_status": "green" }];
  servicios4 = [{ "id_servicio": "6", "id_categoria": "4", "nombre_servicio": "Login/SSO", "descripcion": "Inicio de sesión", "system_status": "red" }];
  servicios5 = [{ "id_servicio": "7", "id_categoria": "5", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de sesión", "system_status": "green" }, { "id_servicio": "8", "id_categoria": "1", "nombre_servicio": "Uploads/Dowloads", "descripcion": "Actualizaciones y descargas de novedades", "system_status": "green" }];
  servicios6 = [{ "id_servicio": "9", "id_categoria": "6", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de sesión", "system_status": "green" }];
  servicios8 = [{ "id_servicio": "10", "id_categoria": "8", "nombre_servicio": "Login/SOO", "descripcion": "Inicio de sesión", "system_status": "green" }];

  obtenerServicios(id: number) {
    if (id == 1) {
      return this.servicios1;
    }
    if (id == 2) {
      return this.servicios2;
    }
    if (id == 3) {
      return this.servicios3;
    }
    if (id == 4) {
      return this.servicios4;
    }
    if (id == 5) {
      return this.servicios5;
    }
    if (id == 6) {
      return this.servicios6;
    }
    if (id == 8) {
      return this.servicios8;
    }
    else {
      return this.servicios1;
    }
  }

  fakeDataIncidencias = [
    { "id_servicio": "3", "id_categoria": "2", "nombre_servicio": "Content API", "descripcion": "Error de conexión con la   API de contenidos", "system_status": "yellow" },
    { "id_servicio": "6", "id_categoria": "4", "nombre_servicio": "Login/SSO", "descripcion": "Error al iniciar sesión", "system_status": "red" }
  ]

  obtenerIncidencias() {
    return this.fakeDataIncidencias;
  }

  obtenerHistorialIncidencias() {
    let obj = [
      {
        "id_incidencia": "1",
        "id_servicio": "3",
        "prioridad": "P1",
        "id_categoria": "2",
        "num_incidencia": "3",
        "status": "Yellow",
        "descripcion_incidencia": "Existe un problema con la web",
        "status_pdf": "0",
        "fecha": "2023-04-12 15:21:03",
        "nombre_servicio": "Webhooks"
      },
      {
        "id_incidencia": "2",
        "id_servicio": "8",
        "prioridad": "P2",
        "id_categoria": "4",
        "num_incidencia": "1",
        "status": "Yellow",
        "descripcion_incidencia": "Las aplicaciones estan fallando",
        "status_pdf": "1",
        "fecha": "2023-04-12 12:53:14",
        "nombre_servicio": "Search"
      },
      {
        "id_incidencia": "4",
        "id_servicio": "6",
        "prioridad": null,
        "id_categoria": "3",
        "num_incidencia": null,
        "status": "Green",
        "descripcion_incidencia": "Herramienta realiza acción erronea",
        "status_pdf": null,
        "fecha": "2023-04-12 19:31:56",
        "nombre_servicio": "Box Edit-Tools"
      }
    ]

    return obj;
  }

  logeado = new BehaviorSubject(false);

  validarLogin() {
    this.logeado.next(true);
  }
}
