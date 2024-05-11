import { Component, OnInit } from '@angular/core';
import { IWatchlist } from '../../../../shared/interfaces/watchList';
import { WatchListService } from '../../../../shared/services/watch-list.service';
import { UserService } from '../../../../shared/services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-d-watchlist',
  templateUrl: './d-watchlist.component.html',
  styleUrl: './d-watchlist.component.css'
})
export class DWatchlistComponent implements OnInit {

  constructor(
    private watchListService: WatchListService,
    private userService: UserService
  ) { }

  category: string = 'خودرو';
  searchInput: string = '';
  watchListCategory: string[] = ['خودرو', 'فلز', 'دارو',];
  watchList: IWatchlist[] = [];

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
    this.watchListService.getWatchList(user.username).pipe(
      take(1)
    ).subscribe(res => {
      this.watchList = res;
    });
    this.watchListService.watchList.subscribe(item => {
      let flag = true;
      for (let i = 0; i < this.watchList.length; i++)
        if (this.watchList[i].insCode === item.insCode)
          flag = false;
      if (flag)
        this.watchList.push(item);
    })
  }

  changeCategory(arg: string) {
    this.category = arg;
  }

}
