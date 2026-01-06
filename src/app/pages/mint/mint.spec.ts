import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mint } from './mint';

describe('Mint', () => {
  let component: Mint;
  let fixture: ComponentFixture<Mint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
