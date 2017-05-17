import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FuncionarioService } from "app/funcionarios/service/funcionario.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  funcionario: any;

  constructor( private route: ActivatedRoute, 
    private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.funcionario = this.funcionarioService.getFuncionario(this.id);
        if(this.funcionario == null){
          this.router.navigate(['funcionarios/error']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
