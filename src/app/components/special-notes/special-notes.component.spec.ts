import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNotesComponent } from './special-notes.component';

describe('SpecialNotesComponent', () => {
  let component: SpecialNotesComponent;
  let fixture: ComponentFixture<SpecialNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
