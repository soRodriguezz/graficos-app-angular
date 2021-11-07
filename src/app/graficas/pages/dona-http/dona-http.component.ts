import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#FFC00D', '#E8980C', '#FF8300', '#E85D0C'] },
  ];

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales().subscribe( resp => {
    //   const labels = Object.keys(resp);
    //   const values = Object.values(resp);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

    this.graficaService
      .getUsuariosRedesSociales()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
