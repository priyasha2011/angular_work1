import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { form1Service } from '../form1/form1.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'lib-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit 
{
  
 
  // formInfo?:FormGroup;

  
  
  constructor(
    private formService:form1Service,
    public snackRef: MatSnackBar,
    private route:Router,
    // private formService:form1Service,
    public dialogRef: MatDialogRef<BoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
  ) { }

  ngOnInit(): 
  void {
    console.log(this.data);
    // this.formInfo=new FormGroup({
    //   firstName:new FormControl(),
    //   lastName:new FormControl(),
    //   country:new FormControl(),
    //   select:new FormControl(),
    //   info:new FormControl(),
    //   hobby:new FormControl(),
    //   comment:new FormControl(),


    // });
    
  }
  

    onYes(){
    //   this.formService.formData.push(this.formInfo?.value);
    // console.log(this.formService.formData);
    this.route.navigate(['assignment/table']);
    this.dialogRef.close();
    this.formService.formData.push(this.data);
    this.snackRef.open('Data Added Successfully',"Form Submitted",{
      duration:1000
    }

    )}






    onNo(){
      // this.route.navigate(['assignment/form']);
      this.dialogRef.close();
      
      
    }




}
