import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) {
    
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
    let userDetails={Email:'',Password:''}
    userDetails.Email=f.value.email;
    userDetails.Password=f.value.password;
    //console.log(f);
    this.authService.registerUser(userDetails);
    
  }

}
