import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: DataService, private route: Router,private ngxService: NgxUiLoaderService) { }
  loginDetails: any = {};
  user: any = {};
  userCVData: any = {};
  role: string = "";
  ngOnInit(): void {
  }

  public login() {
    console.log("inside login");

     this.service.loginUser(this.loginDetails).subscribe((res) => {
      console.log(res);
      this.user = <any>res
      if (this.user) {

        if (this.loginDetails.password == this.user.password) {
          console.log("inside second if");
          this.role = this.user.role;
          console.log(this.role);

          if (this.role == "admin" || this.role == "Admin") {
            localStorage.setItem("algodomainAdmin", JSON.stringify(this.user))
            this.route.navigate(["AdminPage"]);
            

          }
          else {
            
            localStorage.setItem("user", JSON.stringify(this.user))
            this.checkForCV();
             this.ngxService.start();
            setTimeout(() => {
              this.route.navigate(["EditResume"])
            }
            , 5000);
            setTimeout(() => {
              this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
            }, 5000);
            
            // this.route.navigate([""]);
            
          }
          

        }
        else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Username or Password!',

          })

        }


      }
      else {
        console.log("false");

        

      }

    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',

      })
    })

    // console.log(temp);

    // if (temp) {

    // }
  }

  public checkForCV() {

    this.service.fetchCVData(this.user).subscribe((res) => {
      this.userCVData = <any>res
      console.log(this.userCVData);
      if (this.userCVData != null || this.userCVData != "" || this.userCVData != undefined) {
        console.log("cv data present");

        this.service.setCVuserData(this.userCVData);
      }
      else {
        console.log("no data");

      }

    })

  }

}
