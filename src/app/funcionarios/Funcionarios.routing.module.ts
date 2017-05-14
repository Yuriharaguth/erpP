import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosComponent } from "app/funcionarios/funcionarios.component";
import { FormComponent } from "app/funcionarios/form/form.component";
import { DetalhesComponent } from "app/funcionarios/detalhes/detalhes.component";

const funcionariosRoutes: Routes = [
    {path: 'funcionarios', component: FuncionariosComponent, children: [
        {path: 'novo', component: FormComponent},
        {path: ':id', component: DetalhesComponent},
        {path: ':id/editar', component: FormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(funcionariosRoutes)],
    exports: [RouterModule]
})
export class FuncionariosRoutingModule {}

