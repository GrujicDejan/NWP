import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router: Router) {}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("Auth is being called");
        if (localStorage.getItem("token")) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }

}