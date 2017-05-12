import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosComponent } from "app/funcionarios/funcionarios.component";



const alunosRoutes: Routes = [
    {path: 'funcionarios', component: FuncionariosComponent}
];

@NgModule({
})
export class FuncionariosRoutingModule {}

