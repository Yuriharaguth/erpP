import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FuncionariosModule } from "app/funcionarios/funcionarios.module";
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppRoutingModule } from "app/app.routing.module";
import { AuthService } from "app/login/auth.service";
import { AuthGuard } from "app/guards/auth.guard";
import { FuncionariosGuard } from "app/guards/funcionarios.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FuncionariosModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, FuncionariosGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
