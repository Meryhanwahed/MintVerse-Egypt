import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parteners } from './parteners';

describe('Parteners', () => {
  let component: Parteners;
  let fixture: ComponentFixture<Parteners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parteners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parteners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
