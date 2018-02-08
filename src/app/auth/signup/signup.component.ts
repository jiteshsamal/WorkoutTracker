import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() {
    
    this.startDate=new Date();
    var year=this.startDate.getFullYear()-18
    var month=this.startDate.getDay();
    this.startDate=new Date().setFullYear(year,this.startDate.getMonth(),this.startDate.getDay());
    //console.log(this.startDate);
   }
  startDate:any;

  ngOnInit() {
  }

  submitForm(f:NgForm){
    console.log(f);
  }

}
