import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {TrainingComponent} from '../training/training.component';
import {AuthGuard} from '../AuthGuard.service'


const routes:Routes=[
    {path:'',component:TrainingComponent,canActivate:[AuthGuard]},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[AuthGuard]
    
})

export class TrainingRoutingModule{

}