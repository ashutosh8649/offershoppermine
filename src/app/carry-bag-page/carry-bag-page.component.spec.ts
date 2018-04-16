import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryBagPageComponent } from './carry-bag-page.component';

describe('CarryBagPageComponent', () => {
  let component: CarryBagPageComponent;
  let fixture: ComponentFixture<CarryBagPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryBagPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryBagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
