import {Injectable} from '@angular/core'
import {Exercise} from './Exercise.model'

import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable() 
export class TrainingService{

    trainingActivated=new Subject<Exercise>();
    trainingDataUpdated=new Subject<Exercise[]>();
    runningExercise:Exercise;
    ExerciseList:Exercise[];


    PastExerciseList:Exercise[];

    constructor(private db:AngularFirestore){
     this.db.collection('Available-Exercises').snapshotChanges()
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
                this.ExerciseList=data;
                 this.trainingDataUpdated.next(this.ExerciseList)
             })
    }

    getExercise(){
      return this.ExerciseList;
        
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


    getPastExercises(){
        return this.PastExerciseList.slice();
    }

    stopTraining(training:Exercise){
        this.PastExerciseList.push(training);
        this.runningExercise=new Exercise();
        this.trainingActivated.next( this.runningExercise);
    }
    


}