import { Component, OnInit } from '@angular/core';
import { form1Service } from '../form1/form1.service';
import { Router } from '@angular/router';



@Component({
  selector: 'lib-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  constructor(private route:Router,
    public formTable:form1Service) { 


  }
  displayedColumns:any=[
    'firstName',
    'lastName',
    'country',
    'select',
    'info',
    'hobby',
    'comment'
  ]
  

  ngOnInit(): void {
  }
  onReturn(){
    this.route.navigate(['assignment/form']);
  }

}
