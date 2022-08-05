import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private service: DataService, private route: Router) { }
  cvUserData: any = {
    education: [],
    workExperiences: [],
    professionalSummaries: [],
    certifications:[],
    techskill: []=[],
  };
  techskill:any[]=[];
  educations:any []=[];
    workExperiences: any []=[];
    professionalSummaries: any []=[];
  certifications:any[]=[];
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
   
    console.log("image name",this.cvUserData.image);

  };
  //image_name
  // imageName=this.cvUserData.image;
  imageName=<string>this.cvUserData.image;
  file=new FormControl('')
  file_data:any=''


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

  //image_related_methods&variables

 
  // path="dummy-profile-pic.png";
 public fileChange(event:any) {
  if (event.target.files) {
    var file = new FileReader();
    file.readAsDataURL(event.target.files[0]);
    file.onload = (image: any) => {
     this.cvUserData.image = image.target.result;
      console.log("form onload 92",this.imageName);
      localStorage.setItem("image",this.cvUserData.image);
    }
  }
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 4 mb
        if((file.size/1048576)<=1)
        {
          let formData = new FormData();
          let info={id:2,name:'raja'}
          formData.append('file', file, file.name);
          formData.append('id','2');
          formData.append('tz',new Date().toISOString())
          formData.append('update','2')
          formData.append('info',JSON.stringify(info))
          this.file_data=formData
          this.service.changeData(this.file_data);  //invoke new Data
       
          
        
       
        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
        }
        
        
    }
    

  }



  // methods for adding list fields
  public addEducation(degree: string, passYear: string, university: string) {
    
    if(this.educations.length>=4){
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
    this.educations.push(education);
    this.cvUserData.education=this.educations;
    
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
    if(this.workExperiences.length>=4){
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
    this.workExperiences.push(workExperience);
    this.cvUserData.workExperiences=this.workExperiences;
    console.log(this.cvUserData.workExperiences);
  }

  }

  public addSummary(pdetails: any) {

    if(this.professionalSummaries.length>=4){
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
      this.professionalSummaries.push(professionalSummary);  
      this.cvUserData.professionalSummaries=this.professionalSummaries;
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
    if(this.certifications.length>=4){
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
    this.certifications.push(certificate);
    this.cvUserData.certifications=this.certifications;
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
