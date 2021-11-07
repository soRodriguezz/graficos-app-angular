import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() public barChartLabels: Label[] = [
    // '2020',
    // '2021',
    // '2022',
    // '2023',
    // '2024',
    // '2025',
    // '2026',
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [
    // {
    //   data: [65, 59, 80, 81, 56, 55, 40],
    //   label: 'Series A',
    //   backgroundColor: '#03AEFF',
    //   hoverBackgroundColor: '#3039E3',
    // },
    // {
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   label: 'Series B',
    //   backgroundColor: '#0EF5E2',
    //   hoverBackgroundColor: '#3039E3',
    // },
    // {
    //   data: [8, 78, 10, 39, 66, 7, 10],
    //   label: 'Series C',
    //   backgroundColor: '#05FF7F',
    //   hoverBackgroundColor: '#3039E3',
    // },
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }
}
