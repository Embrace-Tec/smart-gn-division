import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentComponentComponent } from './self-employment-component.component';

describe('SelfEmploymentComponentComponent', () => {
  let component: SelfEmploymentComponentComponent;
  let fixture: ComponentFixture<SelfEmploymentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfEmploymentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEmploymentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
