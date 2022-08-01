import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:DataService,private route:Router,private ngxService: NgxUiLoaderService) { }
    user:any={};
  ngOnInit(): void {
  }

  public signUp(){

    this.service.signUP(this.user).subscribe((res)=>{

      if(res==null||res==undefined||res==""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
         
        })
      }
      else{
        let user:any={
          "name":this.user.name,
          "email":this.user.email,
          "role":"Developer"
        }
        this.service.saveCVData(user).subscribe((res)=>{
          console.log("from sigup 38 "+res);
          
        })
        this.service.setCVuserData(user);
        localStorage.setItem("user", JSON.stringify(this.user));
        Swal.fire(
          'Done!!',
          'Account created successfully',
          'success'
        ).then((result) => {
          
          if (result.isConfirmed) {
            setTimeout(() => {
              this.route.navigate(["EditResume"])
            }
            , 1000);
            setTimeout(() => {
              this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
            }, 5000);
            
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
      
    },(err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })
    })
  }

}
