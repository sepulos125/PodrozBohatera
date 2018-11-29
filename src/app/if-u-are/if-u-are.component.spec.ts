import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfUAreComponent } from './if-u-are.component';

describe('IfUAreComponent', () => {
  let component: IfUAreComponent;
  let fixture: ComponentFixture<IfUAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfUAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfUAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
