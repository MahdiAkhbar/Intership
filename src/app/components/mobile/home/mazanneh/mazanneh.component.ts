import { Component, OnInit } from '@angular/core';
import { IMazanneh } from '../../../../shared/interfaces/mazanneh';

@Component({
  selector: 'app-mazanneh',
  templateUrl: './mazanneh.component.html',
  styleUrl: './mazanneh.component.css'
})
export class MazannehComponent implements OnInit {

  sellData: IMazanneh[] = [
    {
      count: 3,
      volume: 2000000,
      price: 5475
    },
    {
      count: 2,
      volume: 255000,
      price: 5789
    },
    {
      count: 20,
      volume: 1000000,
      price: 5475
    },
    {
      count: 5,
      volume: 400000,
      price: 2045
    },
    {
      count: 3,
      volume: 700,
      price: 78452
    },
  ];

  columns: string[] = ['count', 'volume', 'price'];
  sellHeaderColor: string = '#63E6BE';
  buyHeaderColor: string = '#FFA8A8';

  volumes: number[] = [];
  maxVolume!: number

  ngOnInit(): void {
    this.sellData.forEach(element => {
      this.volumes.push(element.volume);
    });

    this.maxVolume = Math.max(...this.volumes);
  }

  getItemBackgroundWidth(val: number) {
    return 100 * val / this.maxVolume;
  }

}
