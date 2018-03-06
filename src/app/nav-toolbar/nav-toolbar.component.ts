import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../auth/user.model';
import {Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent implements OnInit {

  public User:User;
  public isAuthenticated:boolean=false;
  public authSubscription:Subscription;

 @Output() toggleNav= new EventEmitter<void>();

  constructor(public authService:AuthService) { }

  ngOnInit() {
    this.authSubscription=this.authService.authenticationChanged.subscribe((data)=>{
      this.isAuthenticated=data;
    })
  }

  toggleSideNav(){
    this.toggleNav.emit();
  }
  signOut(){
    this.authService.signOut();
  }


}
