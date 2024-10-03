import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { LiveAuctionComponent } from './live-auction.component';

describe('LiveAuctionComponent', () => {
  let component: LiveAuctionComponent;
  let fixture: ComponentFixture<LiveAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LiveAuctionComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
