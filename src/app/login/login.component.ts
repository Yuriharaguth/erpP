import { Component, OnInit } from '@angular/core';

import { AuthService } from "app/login/auth.service";
import { Funcionario } from "app/model/funcionario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private funcionario: Funcionario = new Funcionario();

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  fazerLogin(){
    this.authService.fazerLogin(this.funcionario);
  }

}
