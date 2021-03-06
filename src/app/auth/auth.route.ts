import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { SignupComponent } from '../auth/signup/signup.component';
import {LoginComponent} from '../auth/login/login.component';
import { AuthGuard } from '../AuthGuard.service';

const routes:Routes=[
    {path:'signup',component:SignupComponent},
    {path:'signin',component:LoginComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[]
    
})

export class AuthRoutingModule{

}