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
          debugger;
          this.stopTraining();
          this.trainingExit.emit();
        } 
          else
          this.startOrResumeTimer();
      });
  }

  stopTraining(){
    debugger;
     var training=new Exercise();
     training.name=this.trainingService.runningExercise.name;
     training.duration=this.trainingService.runningExercise.duration*this.spinnnervalue/100 * 1000;
     training.calories=this.trainingService.runningExercise.calories * (this.spinnnervalue/100);
     training.state='stopped';
     training.startDate=new Date().toDateString();
     this.trainingService.stopTraining(training);
     console.log();
  }

  completeTraining(){
    debugger;
    var training=new Exercise();
    training.name=this.trainingService.runningExercise.name;
    training.duration=this.trainingService.runningExercise.duration*this.spinnnervalue/100 * 1000;
    training.calories=this.trainingService.runningExercise.calories * (this.spinnnervalue/100);
    training.state='completed';
    training.startDate=new Date().toDateString();
    this.trainingService.stopTraining(training);
 }
}
