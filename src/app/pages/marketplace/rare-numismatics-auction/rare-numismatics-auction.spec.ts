import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareNumismaticsAuction } from './rare-numismatics-auction';

describe('RareNumismaticsAuction', () => {
  let component: RareNumismaticsAuction;
  let fixture: ComponentFixture<RareNumismaticsAuction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RareNumismaticsAuction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RareNumismaticsAuction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
