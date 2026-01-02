import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fqs } from './fqs';

describe('Fqs', () => {
  let component: Fqs;
  let fixture: ComponentFixture<Fqs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fqs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fqs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
