import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAppStore, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { NgbCarousel, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private config: NgbCarouselConfig, private ngb: NgbCarousel, private modal: NgbModal) {
    config.interval = 3000;
    config.wrap = true;
    config.showNavigationIndicators = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    ngb.animation = true;
  }


  ngOnInit(): void {
  }
  imageURL = "../../assets/p.jpg";
  closeResult: string="";
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    username: "",
    password: "",
    addressType: "",
    address1: "",
    address2: "",
  }
  home: boolean = false;
  company = false;
  value: number = 0;
 
  currentAddress: string = "Select";
  public interests: string = "";
  public listInterest: string[] = [];
 

  // Fa icons
  faCoffee = faFreeCodeCamp
  trophy = faAppStore

  

  


  

}
