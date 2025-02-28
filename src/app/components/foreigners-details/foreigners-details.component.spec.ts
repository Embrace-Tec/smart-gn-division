import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignersDetailsComponent } from './foreigners-details.component';

describe('ForeignersDetailsComponent', () => {
  let component: ForeignersDetailsComponent;
  let fixture: ComponentFixture<ForeignersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForeignersDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
