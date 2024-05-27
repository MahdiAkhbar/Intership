import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import { StockService } from '../../../../shared/services/stock.service';
import { distinctUntilChanged, interval, mergeMap, startWith, switchMap } from 'rxjs';

export type ChartType = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-d-chrt',
  templateUrl: './d-chart.component.html',
  styleUrl: './d-chart.component.css'
})
export class DChartComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private stockService: StockService
  ) { }

  private root!: am5.Root;
  private rootax!: am5.Root;
  chartType: ChartType = { value: 'line', viewValue: 'خطی' };
  chartDuration: ChartType = { value: 'day', viewValue: 'روزانه' };
  chartData: { date: any, value: number }[] = [];

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

  ngOnInit(): void {
    this.stockService.insCode.pipe(
      distinctUntilChanged(),
      switchMap((ins) => interval(5 * 60 * 1000).pipe(
        startWith(0),
        mergeMap(() => this.stockService.getChartInfo(ins))
      ))
    ).subscribe((res) => {
      if (this.root)
        this.root.dispose();
      this.chartData = [];
      res.forEach(item => {
        let time = item.eventClock;
        let s = time % 100;
        time = Math.floor(time / 100);
        let m = time % 100;
        time = Math.floor(time / 100);
        let h = time;
        let date = new Date();
        date.setHours(h);
        date.setMinutes(m);
        date.setSeconds(s);
        this.chartData.push({
          date: date.getTime(),
          value: item.closePrice
        })
      })
      this.browserOnly(() => {
        let root = am5.Root.new("chartdiv");

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panY: false,
            panX: true,
            wheelY: "zoomX",
            layout: root.verticalLayout,
            maxTooltipDistance: 0
          })
        );

        // Create Y-axis
        var yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            extraTooltipPrecision: 1,
            renderer: am5xy.AxisRendererY.new(root, {})
          })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
          am5xy.DateAxis.new(root, {
            baseInterval: { timeUnit: "minute", count: 6 },
            renderer: am5xy.AxisRendererX.new(root, {})
          }),
        );

        // Create series
        const createSeries = (field: string) => {
          var series = chart.series.push(
            am5xy.LineSeries.new(root, {
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: field,
              valueXField: "date",
              tooltip: am5.Tooltip.new(root, {}),
              connect: false
            })
          );

          series.strokes.template.set("strokeWidth", 2);

          series.get("tooltip")?.label.set("text", "[fontSize: 14px]آخرین {valueY}")
          series.data.setAll(this.chartData);
        }

        createSeries("value");

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {
          xAxis: xAxis
        }));

        xAxis.set("tooltip", am5.Tooltip.new(root, {
          themeTags: ["axis"]
        }));
        let x = xAxis.get("tooltipDateFormats");
        if (x)
          x["minute"] = 'HH:mm:ss';

        this.root = root;
      });
    })
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
