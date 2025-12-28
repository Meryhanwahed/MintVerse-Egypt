import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMintCollection } from './featured-mint-collection';

describe('FeaturedMintCollection', () => {
  let component: FeaturedMintCollection;
  let fixture: ComponentFixture<FeaturedMintCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedMintCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMintCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
