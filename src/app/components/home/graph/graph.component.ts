import { Component } from '@angular/core';
import { IGraphType } from '../../../shared/interfaces/graphType';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {

  graphType: IGraphType[] = [
    { value: 'khatti-0', viewValue: 'خطی' },
    { value: 'milei-1', viewValue: 'میله ای' },
    { value: 'shami-2', viewValue: 'شمعی' }
  ];
  graphDuration: IGraphType[] = [
    { value: 'shami-1', viewValue: 'امروز' },
    { value: 'shami-2', viewValue: 'هفته جاری' },
    { value: 'shami-3', viewValue: 'ماهانه' },
    { value: 'shami-4', viewValue: 'سالانه' }
  ];
  graphTimeframe: IGraphType[] = [
    { value: 'shami-1', viewValue: '۵ دقیقه‌ای' },
    { value: 'shami-2', viewValue: '۱۵ دقیقه‌ای' },
    { value: 'shami-3', viewValue: '۱ ساعت' }
  ];

  sellectedGraphType: string = this.graphType[0].value;
  sellectedGraphDuration: string = this.graphDuration[0].value;
  sellectedGraphTimeframe: string = this.graphTimeframe[0].value;

}
