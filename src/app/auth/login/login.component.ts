import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import  { UIService  } from '../../common/ui-service';
import {Subscription,Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from  '../../app.reducer';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  showSpinner$:Observable<boolean>;
  spinnerSubscription:Subscription;
  diameter=50;
  strokeWidth=10;
  constructor(private fb: FormBuilder,private authService:AuthService,private UIService:UIService,private store:Store<{loading:fromApp.State}>) {
    this.createForm();
   }
   

  createForm(){
    this.signinForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  
  ngOnInit() {
    this.showSpinner$=this.store.map((data)=>data.loading.isLoading);
    // this.spinnerSubscription=this.UIService.showSpinner.subscribe(spinner=>{
    //     this.showSpinner=spinner;
    // })
  }
  submitform(){
    this.authService.signin(this.signinForm.value);
    //console.log(this.signinForm.value);
  }

  ngOnDestory() {
    //this.spinnerSubscription.unsubscribe();
  }

}