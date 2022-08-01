import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit { 

    
  constructor(private service:DataService,private route:Router) { }
  user:any []=[]

  ngOnInit(): void {

    this.getAllUsers()
    

  }

  public getAllUsers(){
    this.service.getAllUsers().subscribe((res)=>{
  this.user=<any>res;
 
  
        
      });
      
      
    // window.location.reload()

  }
  public logout(){
    localStorage.clear();
    this.route.navigate(["LoginPage"]);
  }
  public viewUser(i:any){
    let user:any=this.user.slice(i,i+1);
    this.service.setCVuserData(user[0]);
    console.log("cv data saved");
    
      this.route.navigate(["EditResume"],)
   
    
    console.log(user[0]);
    

    
  }

}
