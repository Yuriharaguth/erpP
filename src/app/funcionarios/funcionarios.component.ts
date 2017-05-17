import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "app/funcionarios/service/funcionario.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  private funcionarios: any[] = [];

  constructor(
    private funcionariosService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.funcionarios = this.funcionariosService.getAll();
  }
}
