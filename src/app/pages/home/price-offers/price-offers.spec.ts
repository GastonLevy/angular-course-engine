import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOffers } from './price-offers';

describe('PriceOffers', () => {
  let component: PriceOffers;
  let fixture: ComponentFixture<PriceOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceOffers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
