import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { MaterialModule } from './module/material.module';
import {  RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Form1Component } from './components/form1/form1.component';
import { Table1Component } from './components/table1/table1.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BoxComponent } from './components/box/box.component';


const route:Routes=[
  {path:'',component:FormsComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'form',component:Form1Component},
      {path:'table',component:Table1Component},
      
    ]
  }     
  ]
    
@NgModule({
  declarations: 
  [
    DashboardComponent,
    FormsComponent,
    Form1Component,
    Table1Component,
    BoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // MatButtonModule,
    RouterModule.forChild(route),
    // BrowserAnimationsModule
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsComponentModule { }
