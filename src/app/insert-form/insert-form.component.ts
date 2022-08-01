import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  file=new FormControl('')
  file_data:any=''

 public fileChange(event:any) {
    
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 4 mb
        if((file.size/1048576)<=4)
        {
          let formData = new FormData();
          let info={id:2,name:'raja'}
          formData.append('file', file, file.name);
          formData.append('id','2');
          formData.append('tz',new Date().toISOString())
          formData.append('update','2')
          formData.append('info',JSON.stringify(info))
          this.file_data=formData
          
        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
        }
        
        
    }
    

  }
 public uploadFile()
    {
      console.log("inside upload");
      this.service.uploadFile(this.file_data)
      .subscribe(res => {
      console.log("res "+res);
      
      }, (err) => {
      console.log(err);
      
    });
    }
}
