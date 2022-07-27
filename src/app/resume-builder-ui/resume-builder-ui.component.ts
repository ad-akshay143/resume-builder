import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCheckCircle, faCoffee, faCross, faEdit, faGripVertical, faMailBulk, faMapMarked, faMinusCircle, faMobile, faPlusCircle, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume-builder-ui',
  templateUrl: './resume-builder-ui.component.html',
  styleUrls: ['./resume-builder-ui.component.css']
})
export class ResumeBuilderUiComponent implements OnInit {

  constructor(private service: DataService, private route: Router) { }
  cvUserData: any = {
    education: [],
    workExperiences: [],
    professionalSummaries: [],
    certifications:[],
    techskill: []=[],
  };
  techskill:any[]=[];
  fullname = ""
  result: any;
  flag: boolean = false;
  education: any = {};
  workExperience: any = {};
  professionalSummary: any = {};
  certificate: any = {};
  personalDetails: any = {};
  skill:any={};
  userData: any = {}
  user:any={}
  summaryFlag=true;
  summaryButtonFlag=true;

  ngOnInit(): void {
  
    console.log("cv data "+this.service.isCVData());
    
    if (this.service.isCVData()) {
      this.cvUserData = this.service.getcvUserData()
    }

    console.log(this.cvUserData);

  };


  // all icons 
  faCoffee = faCoffee;
  tickBox = faCheck
  plus = faPlusCircle
  edit = faEdit
  delete = faMinusCircle
  rightQuotes = faQuoteRight
  leftQuote = faQuoteLeft
  address = faMapMarked;
  linkedin = faLinkedinIn
  email = faMailBulk
  mobile = faMobile
  pipe = faGripVertical
  git = faGit
  check = faCheckCircle


  // methods for adding list fields
  public addEducation(degree: string, passYear: string, university: string) {
    
    if(this.cvUserData.education.length>=4){
      Swal.fire({
        icon: 'error',
        title: 'Max length Exceeded',
        text: 'Max 4 Eductions details allowed',
       
      })
    }
    else{
    let education: any = {
      degree: degree,
      yearOfPassing: passYear,
      universityName: university
    }
    this.cvUserData.education.push(education);
  }


  }
  public addSkill(name: string, ratings: string) {
    if(this.techskill.length>=4){
      Swal.fire({
        icon: 'error',
        title: 'Max length Exceeded',
        text: 'Max 4 Eductions details allowed',
       
      })
    }
    else{
    let skill:any = {
      name: name,
      ratings: ratings,
      
      
    }
    this.techskill.push(skill)
    this.cvUserData.techskill=this.techskill;
    console.log(this.cvUserData.techskill);
    
    
  }


  }

  


  public addExperience(month: string, year: string, name: string, exp: string, details: string) {
    if(this.cvUserData.workExperiences.length>=4){
      Swal.fire({
        icon: 'error',
        title: 'Max length Exceeded',
        text: 'Max 4 Work Expereince details allowed',
       
      })
    }
else{
    let workExperience = {
      startedMonth: month,
      startedYear: year,
      companyName: name,
      totalExperience: exp,
      details: details

    }
    this.cvUserData.workExperiences.push(workExperience);
    console.log(this.cvUserData.workExperiences);
  }

  }

  public addSummary(pdetails: any) {

    if(this.cvUserData.professionalSummaries.length>=4){
      Swal.fire({
        icon: 'error',
        title: 'Max length Exceeded',
        text: 'Max 4 summary details allowed',
       
      })
     
    }
    else{
      let professionalSummary = {
        details: pdetails
      };
      this.cvUserData.professionalSummaries.push(professionalSummary);  
    }
   

  }
  editSummary(){
    this.summaryFlag=false;
    this.summaryButtonFlag=false;
  }
  // public addSkill(name:string,ratings:number){
  //   let skill:any={
  //     name:name,
  //     ratings:ratings
  //   };
  //     this.cvUserData.techskill.push(skill);
      
  // }


  public addCertification(name: string, year: string, details: string) {
    if(this.cvUserData.certifications.length>=4){
      Swal.fire({
        icon: 'error',
        title: 'Max length Exceeded',
        text: 'Max 4 certifications allowed',
       
      })
    }
    else{

    let certificate = {
      name: name,
      year: year,
      details: details
    };
    this.cvUserData.certifications.push(certificate);
    console.log(this.cvUserData);
  }

  }


  public removeExp(i: any) {
    // this.exp.splice(i,1);
    this.cvUserData.workExperiences.splice(i, 1);

  }
  public removeEdu(i: any) {

    this.cvUserData.education.splice(i, 1);

  }
  public removeCertificate(i:any){
    this.cvUserData.certifications.splice(i, 1);
  }
  public removeSummary(i:any){

    this.cvUserData.professionalSummaries.splice(i,1);
  }
  public logout(){
    localStorage.clear();
    this.route.navigate(["LoginPage"]);
  }

  printPreview() {
    console.log("setting user in preview");
    console.log(this.cvUserData);

    this.service.setCVuserData(this.cvUserData);


    this.route.navigate(["Preview"]);


  }

}
