import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeemanaDetailsComponent } from './deemana-details.component';

describe('DeemanaDetailsComponent', () => {
  let component: DeemanaDetailsComponent;
  let fixture: ComponentFixture<DeemanaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeemanaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeemanaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
