import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../Exercise.model';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable,Subscription} from 'rxjs';
import { OnDestroy } from '@angular/core';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  

  @Output() trainingStart=new EventEmitter();
  exerCiseSubscription:Subscription;

  ExerciseList:Exercise[];
  constructor(public trainingService:TrainingService) { }

  ngOnInit() {
    this.exerCiseSubscription= this.trainingService.trainingDataUpdated.subscribe(data=>{
      this.ExerciseList=data;
    })
  }
  ngOnDestroy(){
    this.exerCiseSubscription.unsubscribe();
  }


  trainingStarted(f:NgForm){
   this.trainingService.trainingSelected(f.value.selectedExercise);
  }



}
