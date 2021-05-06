
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private accountSer:AccountService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged=this.accountSer.isLoggedIn();
        if (logged) {
            return true;
        }
        
        this.router.navigate(["login"])
        return false;

    }

}