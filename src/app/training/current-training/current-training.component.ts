import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import {TrainingService} from '../training.service';
import { Exercise } from '../Exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  spinnnervalue=0;
  timer:number;
  @Output()  trainingExit = new EventEmitter();
  constructor(private dialog:MatDialog,private trainingService:TrainingService) {
   }

  ngOnInit() {
    this.startOrResumeTimer();
    }


     startOrResumeTimer(){
      let step=((this.trainingService.getRunningExercise().duration)/100 * 1000);
      this.timer = setInterval(
        ()=>{
          if(this.spinnnervalue < 100){ 
            this.spinnnervalue += 1;
          }
          else{
            clearInterval( this.timer);
            this.completeTraining();
            this.trainingExit.emit();
          }},step)
     }


  clearTimer(){
    clearInterval( this.timer);
    let dialogRef=this.dialog.open(StopTrainingComponent,
      {
        data:this.spinnnervalue
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.stopTraining();
          this.trainingExit.emit();
        } 
          else
          this.startOrResumeTimer();
      });
  }

  stopTraining(){
    var training=this.createvariable('stopped')
     this.trainingService.stopTraining(training);
  }

  completeTraining(){
    var training=this.createvariable('completed')
    this.trainingService.stopTraining(training);
 }

 createvariable(state){
  var training=new Exercise();
  training.id=this.trainingService.runningExercise.id;
  training.name=this.trainingService.runningExercise.name;
  training.duration=this.trainingService.runningExercise.duration*this.spinnnervalue/100 * 1000;
  training.calories=this.trainingService.runningExercise.calories * (this.spinnnervalue/100);
  training.state=state;
  training.startDate=new Date().toDateString();
  return training;
 }
}
