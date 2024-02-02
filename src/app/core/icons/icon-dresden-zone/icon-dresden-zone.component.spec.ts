import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDresdenZoneComponent} from './icon-dresden-zone.component';

describe('IconDresdenZoneComponent', () => {
  let component: IconDresdenZoneComponent;
  let fixture: ComponentFixture<IconDresdenZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDresdenZoneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IconDresdenZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
