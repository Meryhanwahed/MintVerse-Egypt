import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coinfilter } from './coinfilter';

describe('Coinfilter', () => {
  let component: Coinfilter;
  let fixture: ComponentFixture<Coinfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coinfilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coinfilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
