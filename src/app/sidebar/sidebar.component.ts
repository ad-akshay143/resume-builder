import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:any={}
   tech:any[]=[
    
  ]
  constructor(private route:Router,private service:DataService) { }
  loggedIn:boolean=false;
  adminLoggedIn=false;
  loggedOut=false;
  // refreshed=true;
 
  ngOnInit(): void {
    if(this.service.isLoggedIn()||this.service.isAdminLoggedIn()){
      this.loggedIn=true;
    }
    if(this.service.isAdminLoggedIn()){
        this.adminLoggedIn=true;
    }
    
   this.service.logStat.asObservable().subscribe((data)=>{
    this.loggedIn=data

  })
  }
  // public refresh(){

  //   window.location.reload()
  //   this.refreshed=false;
  // }

  public logout(){
    localStorage.clear();
    this.loggedIn=this.service.isLoggedIn();
   this.service.logStat.asObservable().subscribe((data)=>{
    this.loggedIn=this.service.isLoggedIn();

  })
    this.loggedOut=true;
    this.adminLoggedIn=false;
    this.route.navigate(["LoginPage"]);
   
   
  }
}
