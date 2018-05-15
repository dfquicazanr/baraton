import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductV3Component } from './product-v3.component';

describe('ProductV3Component', () => {
  let component: ProductV3Component;
  let fixture: ComponentFixture<ProductV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
