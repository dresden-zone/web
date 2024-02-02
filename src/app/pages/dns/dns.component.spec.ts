import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DnsComponent} from './dns.component';

describe('ZoneComponent', () => {
  let component: DnsComponent;
  let fixture: ComponentFixture<DnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DnsComponent]
    });
    fixture = TestBed.createComponent(DnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
