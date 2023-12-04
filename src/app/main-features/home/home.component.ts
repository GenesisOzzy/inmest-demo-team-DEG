import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public series: any[] = [
    {
      name: 'Mest In',
      data: [30, 40, 91, 72, 61, 68, 43, 50, 36, 88, 58, 23],
      number: 13,
    },
    {
      name: 'Mest Off',
      data: [40, 85, 101, 98, 57, 101, 81, 84, 104, 83, 92, 98],
      number: 20,
    },
  ];

  public chart: any = {
    type: 'bar',
    height: 350,
  };

  public title: any = {
    text: '',
    align: 'left',
  };

  public labels: string[] = this.series.map((s: any) => s.number.toString());

  public chartOptions: any = {
    series: [33.3, 33.3, 33.3],
    colors: ['#51BDF9', '#0AA38A', '#2166AC'],
    tooltip: {
      fillSeriesColor: true,
    },
    chart: {
      type: 'donut',
    },
    // labels: ['Team A', 'Team B', 'Team C'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: 'eits', // Set to false to hide the numbers
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
}
