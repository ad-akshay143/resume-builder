import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private service:DataService,private route:Router){}
 
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let adminStr=localStorage.getItem("algodomainAdmin")
    if(adminStr==""||adminStr==null||adminStr==undefined){
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'You are not Admin bro!!',
       
      })
      this.route.navigate([""])
        return false;
    }
    else{
      return true;
    }
  }
  
}
