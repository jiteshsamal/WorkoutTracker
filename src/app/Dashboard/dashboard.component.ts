import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { chart } from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;
 
  constructor() { }
  chart: Highcharts.ChartObject;
  

ngAfterViewInit() {
  const options: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
  },
  title: {
      text: 'Yesterday<br>exercises<br>2017',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
      }
  },
  series: [{
      type: 'pie',
      name: 'Yesterday Report',
      innerSize: '70%',
      data: [
          ['Side Lunges', 25.29],
          ['Crunched', 22],
          ['Burpees', 13.78],
          ['Touch Toes', 13.42],
          {
              name: 'Other',
              y: 7.61,
              dataLabels: {
                  enabled: false
              }
          }
      ]
  }]
  };

  this.chart = chart(this.chartTarget.nativeElement, options);
  
}

  ngOnInit() {
  }
  ngOnDestroy() {
    this.chart = null;
  }


}
