import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveTimeline } from './interactive-timeline';

describe('InteractiveTimeline', () => {
  let component: InteractiveTimeline;
  let fixture: ComponentFixture<InteractiveTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
