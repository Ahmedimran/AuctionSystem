import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldAuctionsComponent } from './old-auctions.component';

describe('OldAuctionsComponent', () => {
  let component: OldAuctionsComponent;
  let fixture: ComponentFixture<OldAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldAuctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
