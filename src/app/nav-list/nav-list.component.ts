import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor() { }


  @Output() sideNavclosed= new EventEmitter<void>();
  ngOnInit() {
  }

  closeSidenav(){
    this.sideNavclosed.emit();
  }

}
