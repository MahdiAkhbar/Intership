import { Component, OnInit } from '@angular/core';

import { IGraphType } from '../../../../shared/interfaces/graphType';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {

  graphType: IGraphType[] = [
    { value: 'line', viewValue: 'خطی' },
    { value: 'bar', viewValue: 'میله ای' },
    { value: 'shami-2', viewValue: 'شمعی' }
  ];
  graphDuration: IGraphType[] = [
    { value: 'day-1', viewValue: 'امروز' },
    { value: 'week-2', viewValue: 'هفته جاری' },
    { value: 'shami-3', viewValue: 'ماهانه' },
    { value: 'shami-4', viewValue: 'سالانه' }
  ];
  graphTimeframe: IGraphType[] = [
    { value: 'shami-1', viewValue: '۵ دقیقه‌ای' },
    { value: 'shami-2', viewValue: '۱۵ دقیقه‌ای' },
    { value: 'shami-3', viewValue: '۱ ساعت' }
  ];

  chartData = [
    { month: 'فروردین', value: '800' },
    { month: 'اردیبهشت', value: '500' },
    { month: 'خرداد', value: '100' },
    { month: 'تیر', value: '300' },
  ]

  sellectedGraphType: any = this.graphType[0].value;
  sellectedGraphDuration: string = this.graphDuration[0].value;
  sellectedGraphTimeframe: string = this.graphTimeframe[0].value;

  public chart: any;

  ngOnInit(): void {

  }


}
