import { Injectable, EventEmitter } from '@angular/core';

import { Funcionario } from "app/model/funcionario";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private temp: boolean = true;
  mostrarMenuEmitter = new EventEmitter<boolean>(); 

  constructor(private router: Router) { }

  fazerLogin(funcionario: Funcionario){
      if(this.temp){  
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
      } else {
        this.mostrarMenuEmitter.emit(false);
      }

      
      
      if (this.usuarioAutenticado){
        this.router.navigate(['/']);
      }
  }
}
