import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from "app/funcionarios/funcionarios.component";
import { DetalhesComponent } from "app/funcionarios/detalhes/detalhes.component";
import { FormComponent } from "app/funcionarios/form/form.component";
import { FuncionarioService } from "app/funcionarios/service/funcionario.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    FuncionariosComponent,
    DetalhesComponent,
    FormComponent
  ],
  providers: [ FuncionarioService ]
})
export class FuncionariosModule { }
