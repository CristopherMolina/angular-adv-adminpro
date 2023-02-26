import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges{

  //La data de las graficas cargan en el ngOnChanges
  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data,
          backgroundColor: ['#6857e6','#009fee','#f02059']}],
    };
  } 

  @Input() titulo: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() data: number[] = [350,450,100];


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data}
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
}
