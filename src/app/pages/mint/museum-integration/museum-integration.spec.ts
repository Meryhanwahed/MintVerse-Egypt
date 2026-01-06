import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumIntegration } from './museum-integration';

describe('MuseumIntegration', () => {
  let component: MuseumIntegration;
  let fixture: ComponentFixture<MuseumIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumIntegration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumIntegration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
