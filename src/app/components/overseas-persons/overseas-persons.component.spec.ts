import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasPersonsComponent } from './overseas-persons.component';

describe('OverseasPersonsComponent', () => {
  let component: OverseasPersonsComponent;
  let fixture: ComponentFixture<OverseasPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverseasPersonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverseasPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
