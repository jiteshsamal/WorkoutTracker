import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';
import {Auth} from './auth.model';
import {Subject} from 'rxjs/Subject';

@Injectable() 
export class AuthService{

    user:User;
    auth:boolean;
    authenticationChanged=new Subject<boolean>();
    constructor(public router:Router){
    }


    //sign up
    registerUser (userDetails:Auth){
        this.user={
            Email:userDetails.Email,
            Username:Math.round(Math.random()*1000).toString()
        }
        this.authenticationChanged.next(true);
        this.router.navigate(['/training']);
    }

    //sign in
    signin (userDetails:Auth){
        this.user={
            Email:userDetails.Email,
            Username:Math.round(Math.random()*1000).toString()
        }
        this.authenticationChanged.next(true);
        this.router.navigate(['/training']);
    }

    getUser(){
    return {...this.user};
    }

    isAuth(){
        return this.user!=null;
    }

    signOut(){
        this.user=null;
        this.authenticationChanged.next(false);
        this.router.navigate(['/signin']);
    }

}