import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../Exercise.model';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable,Subscription} from 'rxjs';
import { OnDestroy } from '@angular/core';
import  { UIService  } from '../../common/ui-service';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  

  @Output() trainingStart=new EventEmitter();
  exerCiseSubscription:Subscription;
  spinnerSubscription:Subscription;
  spinnerLoading:boolean=true;
  ExerciseList:Exercise[]=[];
  spinnerValue=45;
  constructor(public trainingService:TrainingService,private uIService:UIService) { }

  ngOnInit() {

    this.spinnerSubscription=this.uIService.showSpinner.subscribe(data=>{
      this.spinnerLoading=data;
     });
    this.exerCiseSubscription= this.trainingService.trainingDataUpdated.subscribe(data=>{
      this.ExerciseList=data;
    });
    
    this.trainingService.getAllExercises();
  }
  ngOnDestroy(){
    
    this.spinnerSubscription.unsubscribe();
    this.exerCiseSubscription.unsubscribe();
    
  }


  trainingStarted(f:NgForm){
   this.trainingService.trainingSelected(f.value.selectedExercise);
  }



}
