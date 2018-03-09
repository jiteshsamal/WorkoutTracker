import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import  { UIService  } from '../../common/ui-service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  showSpinner:boolean=false;
  spinnerSubscription:Subscription;
  diameter=50;
  strokeWidth=10;
  constructor(private fb: FormBuilder,private authService:AuthService,private UIService:UIService) {
    this.createForm();
   }
  

  createForm(){
    this.signinForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  
  ngOnInit() {
    this.spinnerSubscription=this.UIService.showSpinner.subscribe(spinner=>{
        this.showSpinner=spinner;
    })
  }
  submitform(){
    this.authService.signin(this.signinForm.value);
    //console.log(this.signinForm.value);
  }

  ngOnDestory() {
    this.spinnerSubscription.unsubscribe();
  }

}