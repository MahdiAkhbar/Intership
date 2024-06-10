import { Component, OnInit } from '@angular/core';
import { IWatchlist } from '../../../../shared/interfaces/watchList';
import { WatchListService } from '../../../../shared/services/watch-list.service';
import { UserService } from '../../../../shared/services/user.service';
import { catchError, interval, mergeMap, startWith, switchMap, take, throwError } from 'rxjs';
import { StockService } from '../../../../shared/services/stock.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-d-watchlist',
  templateUrl: './d-watchlist.component.html',
  styleUrl: './d-watchlist.component.css'
})
export class DWatchlistComponent implements OnInit {

  constructor(
    private watchListService: WatchListService,
    private userService: UserService,
    private stockService: StockService,
    private snackBar: MatSnackBar
  ) { }

  category: string = 'خودرو';
  searchInput: string = '';
  watchListCategory: string[] = ['خودرو', 'فلز', 'دارو',];
  watchList: IWatchlist[] = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // watchList: IWatchlist[] = [
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 1000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'ملت',
  //     lastPrice: 2000,
  //     change: {
  //       value: -3,
  //       viewValue: 3
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'پلاسک',
  //     lastPrice: 3000,
  //     change: {
  //       value: -5,
  //       viewValue: 5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'خودرو',
  //     name: 'شپنا',
  //     lastPrice: 4000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'فلز',
  //     name: 'اهن',
  //     lastPrice: 5000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'فلز',
  //     name: 'مس',
  //     lastPrice: 6000,
  //     change: {
  //       value: 5,
  //       viewValue: 5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'فلز',
  //     name: 'روی',
  //     lastPrice: 7000,
  //     change: {
  //       value: -4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'فلز',
  //     name: 'شپنا',
  //     lastPrice: 8000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'دارو',
  //     name: 'سرماخوردگی',
  //     lastPrice: 9000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'دارو',
  //     name: 'استامینوفن',
  //     lastPrice: 10000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'دارو',
  //     name: 'سفکسیم',
  //     lastPrice: 11000,
  //     change: {
  //       value: -4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  //   {
  //     category: 'دارو',
  //     name: 'اموکسیسیلین',
  //     lastPrice: 12000,
  //     change: {
  //       value: 4.5,
  //       viewValue: 4.5
  //     },
  //     volume: 150
  //   },
  // ];

  ngOnInit(): void {
    let user = this.userService.getUser();
    interval(5 * 60 * 1000).pipe(
      startWith(0),
      switchMap(() => this.watchListService.getWatchList(user.username))
    )
      .subscribe(res => {
        this.watchList = res;
      });

    this.watchListService.addWatchList.subscribe(item => {
      let flag = true;
      for (let i = 0; i < this.watchList.length; i++)
        if (this.watchList[i].insCode === item.insCode)
          flag = false;
      if (flag) {
        this.watchListService.addToWatchList(item).pipe(
          take(1),
          catchError((err) => {
            this.snackBar.open('مشکلی پیش آمده. دوباره تلاش کنید!', 'بستن', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 5000
            });
            return throwError(() => err);
          })
        ).subscribe(() => {
          this.watchList.push(item);
          this.snackBar.open('نماد با موفقیت به دیده‌بان اضافه شد', 'بستن', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000
          });
        })
      }
      else {
        this.snackBar.open('نماد قبلا به دیده‌بان اضافه شده است', 'بستن', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000
        });
      }
    })

    this.watchListService.removeWatchListSubject.subscribe(item => {
      this.watchList.forEach((el) => {
        if (el.insCode === item.insCode) {
          let index = this.watchList.indexOf(item);
          this.watchList.splice(index, 1);
        }
      })
    })
  }

  onWatchListItemClicked(ins: string) {
    this.stockService.insCode.next(ins);
    this.stockService.setInsCode(ins);
  }

  changeCategory(arg: string) {
    this.category = arg;
  }

}
