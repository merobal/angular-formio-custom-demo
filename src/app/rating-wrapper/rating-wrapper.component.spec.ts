import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingWrapperComponent } from './rating-wrapper.component';

describe('RatingWrapperComponent', () => {
  let component: RatingWrapperComponent;
  let fixture: ComponentFixture<RatingWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
