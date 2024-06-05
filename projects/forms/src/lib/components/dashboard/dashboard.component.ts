import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(event:any){
    console.log(event);
    if(event==0){
      this.router.navigate(['assignment/form']);


    }
    else if(event==1){
      this.router.navigate(['assignment/table']);


    }
    else if(event==2){
      this.router.navigate(['login']);
    }

}
}
