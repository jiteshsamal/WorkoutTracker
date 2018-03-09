import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../user.model';
import  { UIService  } from '../../common/ui-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showSpinner:boolean=false;
  spinnerSubscription:Subscription;
  diameter=50;
  strokeWidth=10;
  constructor(private authService:AuthService,private UIService:UIService) {
    
    this.startDate=new Date();
    var year=this.startDate.getFullYear()-18
    var month=this.startDate.getDay();
    this.startDate=new Date().setFullYear(year,this.startDate.getMonth(),this.startDate.getDay());
    
    //console.log(this.startDate);
   }
  startDate:any;

  ngOnInit() {
    this.spinnerSubscription=this.UIService.showSpinner.subscribe(spinner=>{
      this.showSpinner=spinner;
  })
  }

  submitForm(f:NgForm){
    let userDetails={Email:'',Password:''}
    userDetails.Email=f.value.email;
    userDetails.Password=f.value.password;
    this.authService.registerUser(userDetails);
    
  }

  ngOnDestory() {
    this.spinnerSubscription.unsubscribe();
  }

}
