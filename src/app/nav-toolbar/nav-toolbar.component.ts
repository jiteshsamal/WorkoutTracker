import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent implements OnInit {

 @Output() toggleNav= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(){
    this.toggleNav.emit();
  }

}
