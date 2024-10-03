import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAuctionsComponent } from './explore-auctions.component';

describe('ExploreAuctionsComponent', () => {
  let component: ExploreAuctionsComponent;
  let fixture: ComponentFixture<ExploreAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreAuctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
