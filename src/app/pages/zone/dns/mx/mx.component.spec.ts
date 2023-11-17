import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MxComponent} from './mx.component';

describe('AComponent', () => {
  let component: MxComponent;
  let fixture: ComponentFixture<MxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MxComponent]
    });
    fixture = TestBed.createComponent(MxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
