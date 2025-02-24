import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalAssetsComponent } from './practical-assets.component';

describe('PracticalAssetsComponent', () => {
  let component: PracticalAssetsComponent;
  let fixture: ComponentFixture<PracticalAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticalAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
