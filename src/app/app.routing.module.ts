import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from "app/dash-board/dash-board.component";
import { LoginComponent } from "app/login/login.component";
import { ModuleWithProviders } from "@angular/core/core";
import { FuncionariosComponent } from "app/funcionarios/funcionarios.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: DashBoardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }