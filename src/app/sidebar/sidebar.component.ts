import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:any={}
   tech:any[]=[
    
  ]
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.user=this.service.getcvUserData()
  }
  rate=0;
rightQuotes=faQuoteRight
leftQuote=faQuoteLeft
// java = 5;
// javascript=5;
// angular = 5;
// html = 5;
// css = 5;
}
