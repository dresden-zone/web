import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecordsComponent} from './records.component';

describe('DnsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecordsComponent]
    });
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
