
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports:[
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
