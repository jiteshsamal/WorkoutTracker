import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
  

  createForm(){
    this.signinForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  
  ngOnInit() {
  }
  submitform(){
    console.log(this.signinForm.value);
  }

}