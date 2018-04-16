import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationDetailsComponent } from './vendor-registration-details.component';

describe('VendorRegistrationDetailsComponent', () => {
  let component: VendorRegistrationDetailsComponent;
  let fixture: ComponentFixture<VendorRegistrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRegistrationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
