import { Component, OnInit,EventEmitter } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../Exercise.model';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable,Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material';






@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {

  private subscriptionData:Subscription
  private ExerciseList:Exercise[];
  private pastDataSubscription:Subscription;

  displayedColumns = ['name', 'calories', 'duration', 'state','startDate'];
  dataSource = new MatTableDataSource<Exercise>();
  constructor(private trainingService:TrainingService) { 
   
  }

  ngOnInit() {
   this.pastDataSubscription = this.trainingService.pastTrainingDataUpdated.subscribe(data=>{
      this.dataSource.data=data;
    });

    this.trainingService.FetchPastExercises();
  }
  ngOnDestory() {
    this.pastDataSubscription.unsubscribe();
  }


}
