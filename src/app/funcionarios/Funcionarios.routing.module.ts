import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosComponent } from "app/funcionarios/funcionarios.component";
import { FormComponent } from "app/funcionarios/form/form.component";
import { DetalhesComponent } from "app/funcionarios/detalhes/detalhes.component";
import { ErrorComponent } from "app/funcionarios/error/error.component";

const funcionariosRoutes: Routes = [
    {path: 'funcionarios', component: FuncionariosComponent },
    {path: 'funcionarios/novo', component: FormComponent},
    {path: 'funcionarios/:id', component: DetalhesComponent},
    {path: 'funcionarios/:id/editar', component: FormComponent},
    {path: 'funcionarios/error', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(funcionariosRoutes)],
    exports: [RouterModule]
})
export class FuncionariosRoutingModule { }

