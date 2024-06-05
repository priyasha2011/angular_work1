import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { form1Service } from './form1.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { BoxComponent } from '../box/box.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'lib-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  formInfo!:FormGroup;
  showDialog:boolean=false;
  

  
  dropDownList:any=[
    {name:"India",value:"India"},
    {name:"USA",value:"USA"},
    {name:"UK",value:"UK"},
    {name:"Japan",value:"Japan"}
  ]

  constructor(private route:Router,
    private formService:form1Service,
    private dialog:MatDialog,
    private _snackBar: MatSnackBar
    
  ) { }

  ngOnInit(): void {
    this.formInfo=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      country:new FormControl(),
      select:new FormControl(),
      info:new FormControl(),
      hobby:new FormControl(),
      comment:new FormControl(),


    });
  }
  onSubmit(){
    // console.log(this.formInfo?.value);
    // this.formService.formData.push(this.formInfo?.value);
    // console.log(this.formService.formData);
    // this.route.navigate(['assignment/table']);
    this.showDialog=true;
    this.dialog.open(BoxComponent,{
      data:this.formInfo.value
    
    })
  }

  

  onReturn(){
    this.route.navigate(['assignment']);
  }
  
//   sendDetails() {
//     const dialogRef = this.dialog.open(BoxComponent, {
//         width: '500px',
//         minHeight: '400px',
//         panelClass: "modal-dialog-box",
//         data: {
//             formInfo: this.formInfo.value,
//             mode: "add",
//         },
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//         if (result == "saved" || result == "updated") {
//           this._snackBar.open("Successful")
//             // setTimeout(() => {
//             //     this.formTable();
//             // }, 100);
//         }
//        });
//     }
  


}
