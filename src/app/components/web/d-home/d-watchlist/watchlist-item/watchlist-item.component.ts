import { Component, Input } from '@angular/core';
import { IWatchlist } from '../../../../../shared/interfaces/watchList';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrl: './watchlist-item.component.css'
})
export class WatchlistItemComponent {

  @Input('watchList') item!: IWatchlist;
  @Input('index') index!: number;
}
