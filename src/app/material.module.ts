import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'




@NgModule({
 exports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule],
  imports: [MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule]
})
export class MaterialModule { }