import {Injectable} from '@angular/core'

import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable, Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable() 
export class UIService{

    showSpinner=new Subject<boolean>();
    //trainingDataUpdated=new Subject<Exercise[]>();

    constructor(private matSnackBar:MatSnackBar){
    }
    showSnackBar(code,message,time){
        this.matSnackBar.open(message, code, {
            duration: time
          });
    }



    


}