import { Component, Input } from '@angular/core';
import { IWatchlist } from '../../../../../shared/interfaces/watchList';
import { WatchListService } from '../../../../../shared/services/watch-list.service';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrl: './watchlist-item.component.css'
})
export class WatchlistItemComponent {
  constructor(
    private watchlistService: WatchListService
  ) { }

  @Input('watchList') item!: IWatchlist;
  @Input('index') index!: number;

  onWatchlistRemove(e: Event, item: IWatchlist) {
    e.stopPropagation();
    this.watchlistService.removeWatchlistItem(this.item.insCode).subscribe(() => {
      this.watchlistService.removeWatchListSubject.next(this.item);
    })

  }
}
