import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coindetails } from './coindetails';

describe('Coindetails', () => {
  let component: Coindetails;
  let fixture: ComponentFixture<Coindetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coindetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coindetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
