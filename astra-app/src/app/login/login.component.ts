import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(
    private categoriaService: CategoriasService,
    private router: Router
  ) { }

  sesionIniciada = false;
  
  showPassword = document.getElementById("showPassword");
  

  ngOnInit(): void {
    
  }

  iniciarSesion(){
    this.categoriaService.validarLogin();
  }

  clickOjo(){
  }
  
  clickLogin(){
    this.iniciarSesion();
  }
}
