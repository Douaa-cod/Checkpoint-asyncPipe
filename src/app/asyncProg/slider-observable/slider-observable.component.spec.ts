import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderObservableComponent } from './slider-observable.component';

describe('SliderObservableComponent', () => {
  let component: SliderObservableComponent;
  let fixture: ComponentFixture<SliderObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
