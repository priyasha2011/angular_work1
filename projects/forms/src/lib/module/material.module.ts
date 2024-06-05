import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [MatButtonModule, MatInputModule,MatCardModule,MatOptionModule,MatSelectModule,MatDialogModule,MatSnackBarModule,MatTableModule],
    exports: [MatButtonModule,MatInputModule, MatCardModule,MatOptionModule,MatSelectModule,MatDialogModule,MatSnackBarModule,MatTableModule]
    
})

export class MaterialModule { }