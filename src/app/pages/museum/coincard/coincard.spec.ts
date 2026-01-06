import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coincard } from './coincard';

describe('Coincard', () => {
  let component: Coincard;
  let fixture: ComponentFixture<Coincard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coincard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coincard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
