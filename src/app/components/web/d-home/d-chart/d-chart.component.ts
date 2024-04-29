import { AfterViewInit, Component, Inject, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';

export type ChartType = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-d-chrt',
  templateUrl: './d-chart.component.html',
  styleUrl: './d-chart.component.css'
})
export class DChartComponent implements AfterViewInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) { }

  private root!: am5.Root;
  chartType: ChartType = { value: 'line', viewValue: 'خطی' };
  chartDuration: ChartType = { value: 'day', viewValue: 'روزانه' };

  chartTypeList = [
    {
      value: 'line',
      viewValue: 'خطی'
    },
    {
      value: 'bar',
      viewValue: 'شمعی'
    }
  ];

  chartDurationList = [
    {
      value: 'day',
      viewValue: 'روزانه'
    },
    {
      value: 'week',
      viewValue: 'هفتگی'
    },
    {
      value: 'month',
      viewValue: 'ماهانه'
    },
    {
      value: 'year',
      viewValue: 'سالانه'
    }
  ];

  changeChartType(val: ChartType) {
    this.chartType = val;
  }

  changeChartDuration(val: ChartType) {
    this.chartDuration = val;
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");
      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

}
