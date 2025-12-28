import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceGrid } from './marketplace-grid';

describe('MarketplaceGrid', () => {
  let component: MarketplaceGrid;
  let fixture: ComponentFixture<MarketplaceGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplaceGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
