import { Component, OnInit } from '@angular/core';
import { faGit, faLinkedinIn, faPiedPiper } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faGripVertical, faLocationArrow, faMailBulk, faMap, faMapMarked, faMapPin, faMobile, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private service:DataService) { }
  user:any={
    name:"",
    role:"",
    email:"",
    mobile:"",
    git:"",
    linkedin:"",
    address:""

  };
  fullname=""
  result:any;

  //gitStyleConfig
  gitBorder="none"
  gitBG="none"
  gitDisplay="none"
  gitEdit=""
  gitDisabled=true

  //mobileStyleConfig
  mobileBorder="none"
  mobileBG="none"
  mobileDisplay="none"
  mobileDisplay1=""
  mobileDisabled=true

  //emailStyleConfigs
  emailBorder="none"
  emailBG="none"
  emailDisplay="none"
  emailDisplay1=""
  emailDisabled=true

  //address
  addressBorder="none"
  addressBG="none"
  addressDisplay="none"
  addressDisplay1=""
  addressDisabled=true

  //linkedinStyleConfigs
  linkedinBorder="none"
  linkedinBG="none"
  linkedinDisplay="none"
  linkedinDisplay1=""
  linkedinDisabled=true



  // all icons
  address = faMapMarked;
  linkedin=faLinkedinIn
  email=faMailBulk
  mobile=faMobile
  pipe=faGripVertical
  git=faGit
  plus=faPlusCircle
  check=faCheckCircle


  ngOnInit(): void {
    this.getUser()

    
    console.log(this.result);

  }

  public editMobile(){
  this.mobileBorder=""
  this.mobileBG=""
  this.mobileDisplay=""
  this.mobileDisplay1="none"
  this.mobileDisabled=false
  }
  public editGit(){
    this.gitBorder=""
    this.gitBG=""
    this.gitDisplay=""
    this.gitEdit="none"
    this.gitDisabled=false

  }

  public editEmail(){
    this.emailBorder=""
    this.emailBG=""
    this.emailDisplay=""
    this.emailDisplay1="none"
    this.emailDisabled=false
    

  }public editAddress(){

    this.addressBorder=""
    this.addressBG=""
    this.addressDisplay=""
    this.addressDisplay1="none"
    this.addressDisabled=false

  }

  public editLinkedin(){
    this.linkedinBorder=""
    this.linkedinBG=""
    this.linkedinDisplay=""
    this.linkedinDisplay1="none"
    this.linkedinDisabled=false

  }

  public saveEmail(data:string){

  this.emailBorder="none"
  this.emailBG="none"
  this.emailDisplay="none"
  this.emailDisplay1=""
  this.emailDisabled=true
  this.user.email=data
    
  }
  public saveGit(data:string){
    this.gitBorder="none"
    this.gitBG="none"
    this.gitDisplay="none"
    this.gitEdit=""
    this.gitDisabled=true
    this.user.git=data
    

  }
  public saveMobile(data:string){
    this.mobileBorder="none"
    this.mobileBG="none"
    this.mobileDisplay="none"
    this.mobileDisplay1=""
    this.mobileDisabled=true
    this.user.mobile=data

  }

  public saveLinkedin(data:string){
    this.linkedinBorder="none"
    this.linkedinBG="none"
    this.linkedinDisplay="none"
    this.linkedinDisplay1=""
    this.linkedinDisabled=true
    this.user.linkedin=data

  }

  public saveAddress(data:string){
    this.addressBorder="none"
    this.addressBG="none"
    this.addressDisplay="none"
    this.addressDisplay1=""
    this.addressDisabled=true
    this.user.address=data

  }

  

  
 


public getUser(){
  // this.service.getData().subscribe((res)=>{
  //  this.user=<any>res
 
    
  // })
  
}


}
