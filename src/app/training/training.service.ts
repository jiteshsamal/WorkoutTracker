import {Injectable} from '@angular/core'
import {Exercise} from './Exercise.model'

import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable, Subscription} from 'rxjs';
import {UIService} from '../common/ui-service'

@Injectable() 
export class TrainingService{

    trainingActivated=new Subject<Exercise>();
    trainingDataUpdated=new Subject<Exercise[]>();
    pastTrainingDataUpdated=new Subject<Exercise[]>();
    runningExercise:Exercise;
    ExerciseList:Exercise[];
    PastExerciseList:Exercise[]=[];
    subscriptioList:Subscription[]=[];

    constructor(private db:AngularFirestore,private uIService:UIService){
     
    }



    getAllExercises(){
       // this.uIService.showSpinner.next(true);
        this.subscriptioList.push(this.db.collection('Available-Exercises').snapshotChanges()
        .map((dataArray)=>{
                 return  dataArray.map(doc=>{
                    return {
                    id:doc.payload.doc.id,
                    name:doc.payload.doc.data().name,
                    duration:doc.payload.doc.data().duration,
                    calories:doc.payload.doc.data().calories,
                    };
                })
             }).subscribe((data:any)=>{
                this.uIService.showSpinner.next(false);
                this.ExerciseList=data;
                 this.trainingDataUpdated.next(this.ExerciseList)
             },
            err=>{
                this.uIService.showSpinner.next(false);
                this.uIService.showSnackBar('','unable to fetch exercise now.Try again.',3000);
                this.trainingDataUpdated.next(null);
            }));
        
    }

    trainingSelected(selectedTrainingId:String){
        this.runningExercise=this.ExerciseList.find((exec:any)=>{
             return exec.id == selectedTrainingId
            });
            this.trainingActivated.next( this.runningExercise);
    }

    trainingstopped(){
       // this.trainingActivated.next(false)
    }

    getRunningExercise(){
        return this.runningExercise;
    }


    FetchPastExercises(){
        this.uIService.showSpinner.next(true);
        this.subscriptioList.push(this.db.collection('Past-Exercises').valueChanges()
        .subscribe((data:any)=>{
           
                this.uIService.showSpinner.next(false);
                this.pastTrainingDataUpdated.next(data)
           
                
             },
            (err)=>{
             
                  this.uIService.showSpinner.next(false);
                this.uIService.showSnackBar('','unable to fetch exercise now.Try again.',3000);
                this.trainingDataUpdated.next(null);
           
               
            }));
    }

    stopTraining(training:any){
        this.db.collection('Past-Exercises').add(Object.assign({},training));
    }

    unsubscribeall(){
        this.subscriptioList.forEach(sub=>{
            sub.unsubscribe();
        })
    }
    


}