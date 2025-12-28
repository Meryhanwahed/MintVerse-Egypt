import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Importances } from './importances';

describe('Importances', () => {
  let component: Importances;
  let fixture: ComponentFixture<Importances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Importances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Importances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
