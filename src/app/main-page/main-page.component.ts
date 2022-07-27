import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCheckCircle, faGripVertical, faMailBulk, faMapMarked, faMobile, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service: DataService, private route: Router) { }

  education:boolean=true;
  summaries:boolean=true;
  workExp:boolean=true;
  certification:boolean=true;

  ngOnInit(): void {
    this.cvUserData = this.service.getcvUserData();
    this.checksForCompo();
    console.log("from mainpage" + this.cvUserData);


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
  cvUserData: any = {
    tech: [] = [

    ]
  }

  public editForm() {
    this.route.navigate(["EditResume"]);
  }

  public checksForCompo(){

    if(this.cvUserData.education!=""){
        this.education=false;
        
    }
    if(this.cvUserData.workExperiences!=""){
      this.workExp=false;
      console.log("we true");
      
  }
  if(this.cvUserData.professionalSummaries!=""){
    this.summaries=false;
    console.log("summary true");
    
}
  }
  public logout(){
    localStorage.clear();
    this.route.navigate(["LoginPage"]);
  }

  public previewForm() {
    // this.service.saveCVData(this.cvUserData).subscribe((res)=>{
    //   console.log(res);

    // })
    console.log("saved");

    window.print()
  }
}
