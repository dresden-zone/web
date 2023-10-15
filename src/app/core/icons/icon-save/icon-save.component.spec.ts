import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSaveComponent } from './icon-save.component';

describe('IconSaveComponent', () => {
  let component: IconSaveComponent;
  let fixture: ComponentFixture<IconSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSaveComponent]
    });
    fixture = TestBed.createComponent(IconSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
