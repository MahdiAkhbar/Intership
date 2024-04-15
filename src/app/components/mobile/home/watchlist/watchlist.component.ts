import { Component } from '@angular/core';
import { IWatchlist } from '../../../../shared/interfaces/watchList';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {

  category: string = 'خودرو';
  searchInput: string = '';
  watchListCategory: string[] = ['خودرو', 'فلز', 'دارو',];
  watchList: IWatchlist[] = [
    //   {
    //     category: 'خودرو',
    //     data: [
    //       {
    //         name: 'شپنا',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'ملت',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'پلاسک',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'شپنا',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //     ]
    //   },
    //   {
    //     category: 'فلز',
    //     data: [
    //       {
    //         name: 'اهن',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'مس',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'روی',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'شپنا',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //     ]
    //   },
    //   {
    //     category: 'دارو',
    //     data: [
    //       {
    //         name: 'سرماخوردگی',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'استامینوفن',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'سفکسیم',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //       {
    //         name: 'اموکسیسیلین',
    //         lastPrice: 2000,
    //         change: {
    //           value: 4.5,
    //           viewValue: 4.5
    //         },
    //         volume: 150
    //       },
    //     ]
    //   }
    {
      category: 'خودرو',
      name: 'شپنا',
      lastPrice: 1000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'خودرو',
      name: 'ملت',
      lastPrice: 2000,
      change: {
        value: -3,
        viewValue: 3
      },
      volume: 150
    },
    {
      category: 'خودرو',
      name: 'پلاسک',
      lastPrice: 3000,
      change: {
        value: -5,
        viewValue: 5
      },
      volume: 150
    },
    {
      category: 'خودرو',
      name: 'شپنا',
      lastPrice: 4000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'فلز',
      name: 'اهن',
      lastPrice: 5000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'فلز',
      name: 'مس',
      lastPrice: 6000,
      change: {
        value: 5,
        viewValue: 5
      },
      volume: 150
    },
    {
      category: 'فلز',
      name: 'روی',
      lastPrice: 7000,
      change: {
        value: -4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'فلز',
      name: 'شپنا',
      lastPrice: 8000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'دارو',
      name: 'سرماخوردگی',
      lastPrice: 9000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'دارو',
      name: 'استامینوفن',
      lastPrice: 10000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'دارو',
      name: 'سفکسیم',
      lastPrice: 11000,
      change: {
        value: -4.5,
        viewValue: 4.5
      },
      volume: 150
    },
    {
      category: 'دارو',
      name: 'اموکسیسیلین',
      lastPrice: 12000,
      change: {
        value: 4.5,
        viewValue: 4.5
      },
      volume: 150
    },
  ];

}
