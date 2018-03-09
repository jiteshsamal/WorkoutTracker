
import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import {TrainingComponent} from '../training/training.component';
import {CurrentTrainingComponent} from '../training/current-training/current-training.component';
import {NewTrainingComponent} from '../training/new-training/new-training.component';
import {PastTrainingComponent} from '../training/past-training/past-training.component';
import { TrainingRoutingModule } from './training.route';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../AuthGuard.service'




@NgModule({
  declarations: [ 
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule
  ],
  providers: [AuthGuard]
})
export class TrainingModule { }
