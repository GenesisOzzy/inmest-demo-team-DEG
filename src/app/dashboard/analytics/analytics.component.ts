import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  public series: any[] = [{
    name: 'Requests',
    data: [30, 60, 57, 52, 61, 55, 60, 60, 66, 62, 84, 23]
    }, {
    name: 'Attendance',
    data: [80, 101, 105, 98, 87, 67, 91, 60, 94, 54, 92, 55]
    }, ];
   
    public chart: any = {
    type: 'bar',
    height: 350
    };
   
    public title: any = {
    text: 'Attendance vs Requests',
    align: 'left'
    };
}
