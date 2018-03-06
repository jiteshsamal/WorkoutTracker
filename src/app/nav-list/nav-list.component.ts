import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { User } from '../auth/user.model';
import {Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor(public authService:AuthService) { }

  public User:User;
  public isAuthenticated:boolean=false;
  public authSubscription:Subscription;
  @Output() sideNavclosed= new EventEmitter<void>();

  ngOnInit() {
    this.authSubscription=this.authService.authenticationChanged.subscribe((data)=>{
      this.isAuthenticated=data;
    })
  }


  ngOnDestory(){
    this.authSubscription.unsubscribe();
  }

  closeSidenav(){
    this.sideNavclosed.emit();
  }

  logOut(){
    this.authService.signOut();
    this.closeSidenav();
  }

}
