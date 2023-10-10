import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaComponent } from './aaaa.component';

describe('AaaaComponent', () => {
  let component: AaaaComponent;
  let fixture: ComponentFixture<AaaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AaaaComponent]
    });
    fixture = TestBed.createComponent(AaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
