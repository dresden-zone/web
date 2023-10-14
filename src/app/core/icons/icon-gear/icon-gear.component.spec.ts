import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGearComponent } from './icon-gear.component';

describe('IconGearComponent', () => {
  let component: IconGearComponent;
  let fixture: ComponentFixture<IconGearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconGearComponent]
    });
    fixture = TestBed.createComponent(IconGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
