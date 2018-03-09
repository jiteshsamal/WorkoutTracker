
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import {MaterialModule} from './material.module';
import {AppRoutingModule} from './routing.module';
import {AuthModule} from '../app/auth/auth.module';

import {environment} from '../environments/environment';





import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {NavListComponent} from './nav-list/nav-list.component';
import {NavToolbarComponent}from './nav-toolbar/nav-toolbar.component';
import { StopTrainingComponent } from './training/stop-training/stop-training.component';



import {AuthService} from './auth/auth.service';

import {TrainingService} from './training/training.service';
import { UIService } from './common/ui-service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavListComponent,
    NavToolbarComponent,
    StopTrainingComponent
    
  ],
  entryComponents:[StopTrainingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    AngularFirestoreModule
  ],
 
  providers: [AuthService,TrainingService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
