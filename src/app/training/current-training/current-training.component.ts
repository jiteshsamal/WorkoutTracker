import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  spinnnervalue=0;
  timer:number;
  constructor() { }

  ngOnInit() {
    this.timer=setInterval(
      ()=>{
        if(this.spinnnervalue >= 100)
      this.spinnnervalue += 10;
      else
     clearInterval( this.timer);
    },2000)
  }


  clearTimer(){
    clearInterval( this.timer);
  }

}
