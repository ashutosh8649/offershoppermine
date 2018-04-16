import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryBagComponent } from './carry-bag.component';

describe('CarryBagComponent', () => {
  let component: CarryBagComponent;
  let fixture: ComponentFixture<CarryBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
