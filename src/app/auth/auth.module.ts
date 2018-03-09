
import { NgModule } from '@angular/core';
import {MaterialModule} from '../material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from './../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from '../app.component';
import { SignupComponent } from '../auth/signup/signup.component';
import {LoginComponent} from '../auth/login/login.component';

import {AuthService} from '../auth/auth.service';
import { UIService } from '../common/ui-service';
import {CommonModule} from '@angular/common';
import { SharedModule } from '../common/shared.module';

import { AuthRoutingModule } from './auth.route';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
