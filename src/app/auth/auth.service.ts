import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';
import {Auth} from './auth.model';
import {Subject} from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';
import {UIService} from '../common/ui-service';
import { Store } from '@ngrx/store';
import * as fromApp from  '../app.reducer';

@Injectable() 
export class AuthService{

    user:User;
    auth:boolean;
    isAuthenticated:boolean;
    myUser:any;
    authenticationChanged=new Subject<boolean>();
    constructor(
        public router:Router,
        private firebaseAuth:AngularFireAuth,
        private trainingService:TrainingService,
        private UIService:UIService,
        private Store:Store<{loading:fromApp.State}>){
        
    }


    //sign up
    registerUser (userDetails:any){
        this.Store.dispatch({type:'START_LOADING'});
       // this.UIService.showSpinner.next(true);
        this.firebaseAuth.auth.createUserWithEmailAndPassword(userDetails.Email, userDetails.Password)
        .then(value => {
            this.Store.dispatch({type:'STOP_LOADING'});
           // this.UIService.showSpinner.next(false);
            })
            .catch((err)=>{
        this.Store.dispatch({type:'STOP_LOADING'});
        this.UIService.showSpinner.next(false);
        this.UIService.showSnackBar("Try Again",err.message,3000);
    });
       
    }

    //sign in
    signin (userDetails:any){
       // this.UIService.showSpinner.next(true);
       this.Store.dispatch({type:'START_LOADING'});       
        this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(userDetails.email, userDetails.password)
        .then((value) => {
           // this.UIService.showSpinner.next(false);
        this.Store.dispatch({type:'STOP_LOADING'});
           
        }).catch((err)=>{
          //  this.UIService.showSpinner.next(false);
        this.Store.dispatch({type:'STOP_LOADING'});
            
            this.UIService.showSnackBar("Try Again",err.message,3000);
        });
        }
    

  

    isAuth(){
        return  this.isAuthenticated;
    }

    signOut(){
        this.firebaseAuth.auth.signOut();  
    }

    initAuthListener() {  
        this.firebaseAuth.authState.subscribe(
            (user) => {
              if (user) {
                this.myUser = user;
                this.isAuthenticated = true;
                this.authenticationChanged.next(true);
                this.router.navigate(['/']);
              }
              else {
                this.trainingService.unsubscribeall();
                this.myUser=null;
                this.authenticationChanged.next(false);
                this.router.navigate(['/signin']);
              }
    
            }
    
          );
    
    }
   
}