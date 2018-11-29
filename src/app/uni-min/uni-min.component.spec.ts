import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniMinComponent } from './uni-min.component';

describe('UniMinComponent', () => {
  let component: UniMinComponent;
  let fixture: ComponentFixture<UniMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
