import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentBenefitsComponent } from './goverment-benefits.component';

describe('GovermentBenefitsComponent', () => {
  let component: GovermentBenefitsComponent;
  let fixture: ComponentFixture<GovermentBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GovermentBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovermentBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
