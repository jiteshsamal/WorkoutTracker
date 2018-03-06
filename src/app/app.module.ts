import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {NavListComponent} from './nav-list/nav-list.component';
import {NavToolbarComponent}from './nav-toolbar/nav-toolbar.component';



import {AuthService} from './auth/auth.service';
import { StopTrainingComponent } from './training/stop-training/stop-training.component';
import {TrainingService} from './training/training.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    NavListComponent,
    NavToolbarComponent,
    StopTrainingComponent
    
  ],
  entryComponents:[StopTrainingComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
 
  providers: [AuthService,TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
