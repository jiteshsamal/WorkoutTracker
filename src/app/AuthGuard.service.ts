import {Injectable} from '@angular/core';
import {Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import { CanActivate } from '@angular/router/src/interfaces';
import {AuthService} from './auth/auth.service';


@Injectable() 
export class AuthGuard implements CanActivate{
    constructor(public router:Router,public authService:AuthService ){
    }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
        debugger;
        if(this.authService.isAuth())
        return true;
        else
         this.router.navigate(["/signin"]);
         return false;
      }



}