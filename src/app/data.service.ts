import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  userData:any={}
  userCVData:any={};
  public logStat=new Subject<boolean>();
  constructor(private ser:HttpClient) { }
  ngOnInit(): void {
    
  }

  public loginUser(user:any){

    return this.ser.post("http://localhost/firstPHP/sign-in.php",user);

  }

 public setOldCVData(){

  this.fetchCVData(this.userData).subscribe((res)=>{
    this.userCVData=<any>res;
  })
  return this.userCVData;
 }
  
  
  public isLoggedIn(){

  
    let userStr=localStorage.getItem("user");
    

    if(userStr==""||userStr==null||userStr==undefined){
      return false;
    }

  else{
    return true;
  } 
    
  }
  public isAdminLoggedIn(){
    let adminStr=localStorage.getItem("algodomainAdmin")
    if(adminStr==""||adminStr==null||adminStr==undefined){
        return false;
    }
    else{
      return true;
    }
  }


  public setCVuserData(cvUserData:any){
console.log("setting user");

    localStorage.setItem("cvUserData",JSON.stringify(cvUserData));



  }
  public isCVData(){
    let tokenStr=localStorage.getItem("cvUserData");
    if(tokenStr==undefined || tokenStr==""||tokenStr==null)
    {
      return false;
    }
    else{
      return true;
    }

  }

  public getcvUserData(){
    console.log("getting user");
    
    let userStr:any=localStorage.getItem("cvUserData");
    return JSON.parse(userStr);
    
  }

  
  public fetchCVData(user:any){
      this.userCVData=user;
      
    return this.ser.post("http://localhost/firstPHP/first.php",user);
  }



  public saveCVData(data:any){
      
     
    return this.ser.post("http://localhost/firstPHP/insert.php",data);
  }

  public updateCVData(data:any){

    return this.ser.post("http://localhost/firstPHP/update.php",data);
  }

  public getAllUsers(){

   return this.ser.get("http://localhost/firstPHP/adminPage.php");
  }

  public signUP(user:any){

   return this.ser.post("http://localhost/firstPHP/sign-up.php",user)
  }
  uploadFile(file_data:any)
    {
      console.log("inside service upload");
      
     return this.ser.post("http://localhost/firstPHP/insertImage.php",file_data)
     
    }
 
}
