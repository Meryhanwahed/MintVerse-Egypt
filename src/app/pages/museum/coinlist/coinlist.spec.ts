import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coinlist } from './coinlist';

describe('Coinlist', () => {
  let component: Coinlist;
  let fixture: ComponentFixture<Coinlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coinlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coinlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
