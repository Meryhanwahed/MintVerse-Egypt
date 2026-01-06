import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic } from './infographic';

describe('Infographic', () => {
  let component: Infographic;
  let fixture: ComponentFixture<Infographic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infographic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infographic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
