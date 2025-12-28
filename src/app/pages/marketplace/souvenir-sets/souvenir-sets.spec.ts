import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirSets } from './souvenir-sets';

describe('SouvenirSets', () => {
  let component: SouvenirSets;
  let fixture: ComponentFixture<SouvenirSets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouvenirSets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouvenirSets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
