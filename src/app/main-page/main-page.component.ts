import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCheckCircle, faGripVertical, faMailBulk, faMapMarked, faMobile, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { jsPDF } from "jspdf";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service: DataService, private route: Router,private ngxService: NgxUiLoaderService) { }

  education:boolean=true;
  summaries:boolean=true;
  workExp:boolean=true;
  certification:boolean=true;
  cvUserData: any = {} 
  

  ngOnInit(): void {
    this.ngxService.stop();
    this.cvUserData = this.service.getcvUserData();
    // if(this.cvUserData.professionalSummaries.length<=0){
    //   console.log("true");
    // }
   
    
    this.checksForCompo();
  


  }
  tickBox = faCheck
  rightQuotes = faQuoteRight
  leftQuote = faQuoteLeft
  address = faMapMarked;
  linkedin = faLinkedinIn
  email = faMailBulk
  mobile = faMobile
  pipe = faGripVertical
  git = faGit
  check = faCheckCircle
  fullname = ""
 
  public editForm() {
    this.route.navigate(["EditResume"]);
  }

  public checksForCompo(){

    if(this.cvUserData.education==null||this.cvUserData.education.length<=0){
        this.education=false;
        
    }
    if(this.cvUserData.workExperiences==null||this.cvUserData.workExperiences.length<=0){
      this.workExp=false;
      console.log("we true");
      
  }
  if(this.cvUserData.professionalSummaries==null||this.cvUserData.professionalSummaries.length<=0){
    this.summaries=false;
    console.log("summary false");
    
}
if(this.cvUserData.certifications==null||this.cvUserData.certifications.length<=0){
  this.certification=false;
  console.log("certifications true");
  
}
  }


  public logout(){
    localStorage.clear();
    this.route.navigate(["LoginPage"]);
  }

  public previewForm() {
    let cvData:any={
      "address": this.cvUserData.address,
"certifications": this.cvUserData.certifications,
"education": this.cvUserData.education,
"email": this.cvUserData.email,
"git": this.cvUserData.git,
"linkedIn": this.cvUserData.linkedIn,
"mobile": this.cvUserData.mobile,
"name": this.cvUserData.name,
"objective": this.cvUserData.objective,
"professionalSummaries": this.cvUserData.professionalSummaries,
"role": this.cvUserData.role,
"techskill": this.cvUserData.techskill,
"workExperiences": this.cvUserData.workExperiences

    }
    this.service.updateCVData(cvData).subscribe((res)=>{
      console.log(res);

    })
    console.log(this.cvUserData);
    window.print()

    
  }
}
