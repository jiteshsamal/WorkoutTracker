import { Component, OnInit } from '@angular/core';
import {TrainingService} from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  onGoingTraining:boolean=false;
  
  constructor(public trainingService:TrainingService) {
    this.trainingService.trainingActivated.subscribe((data)=>{
      this.onGoingTraining=true;
    })
   }

   
  ngOnInit() {
  }

}
