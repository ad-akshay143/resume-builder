import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})



export class LoginGuardGuard implements CanActivate {
  constructor(private service:DataService,private route:Router){}
  cvUserData:any={};
  password:string="";
  flag:boolean=true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

  if(this.service.isLoggedIn()||this.service.isAdminLoggedIn()){
    console.log(this.flag);
    return true;
  }
  else{
    console.log(this.flag);
    this.route.navigate(["LoginPage"]);
    return false;
  }
  
  }
  
}
