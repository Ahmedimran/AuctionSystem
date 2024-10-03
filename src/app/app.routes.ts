import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';
import { ExploreAuctionsComponent } from './explore-auctions/explore-auctions.component';
import { OldAuctionsComponent } from './old-auctions/old-auctions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'live-auction', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'live-auction',
    component: LiveAuctionComponent,
    data: {
      text: 'Live Auction'
    }
  },
  {
    path: 'explore-auctions',
    component: ExploreAuctionsComponent,
    data: {
      text: 'Explore Auctions'
    }
  },
  {
    path: 'old-auctions',
    component: OldAuctionsComponent,
    data: {
      text: 'Old Auctions'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
