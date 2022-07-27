import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  constructor(private service:DataService) { }
  user:any={


  }
  ngOnInit(): void {
  }

  createUser(){
    console.log(this.user);
      // this.service.createUser(this.user).subscribe((res)=>{
      //   console.log(res);
        
      // });
    
  }

}
