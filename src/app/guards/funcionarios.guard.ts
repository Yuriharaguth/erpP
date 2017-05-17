import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FuncionariosGuard implements CanActivateChild {
    
    canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot)
      : boolean | Observable<boolean> {
      return false;
    }



}
