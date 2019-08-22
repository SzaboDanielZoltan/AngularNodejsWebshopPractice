import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewOrderComponent } from './admin-new-order.component';

describe('AdminNewOrderComponent', () => {
  let component: AdminNewOrderComponent;
  let fixture: ComponentFixture<AdminNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
