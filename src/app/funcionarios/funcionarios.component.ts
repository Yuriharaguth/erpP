import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "app/funcionarios/service/funcionario.service";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  private funcionarios: any[] = [];

  constructor(private funcionariosService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionariosService.getAll();
  }
}
