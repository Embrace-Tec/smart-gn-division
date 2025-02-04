import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchServicesComponent } from './touch-services.component';

describe('TouchServicesComponent', () => {
  let component: TouchServicesComponent;
  let fixture: ComponentFixture<TouchServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouchServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
