import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinJourne } from './coin-journe';

describe('CoinJourne', () => {
  let component: CoinJourne;
  let fixture: ComponentFixture<CoinJourne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinJourne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinJourne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
