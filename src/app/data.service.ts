import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData:any={}

  constructor(private ser:HttpClient) { }

  public loginUser(user:any){

    return this.ser.post("http://localhost/firstPHP/sign-in.php",user);

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

    return this.ser.post("http://localhost/firstPHP/first.php",user);
  }



  public saveCVData(data:any){
      
      
    return this.ser.post("http://localhost/firstPHP/insert.php",data);
  }

  public getAllUsers(){

   return this.ser.get("http://localhost/firstPHP/adminPage.php");
  }
 
}
