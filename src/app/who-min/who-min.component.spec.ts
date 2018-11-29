import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoMinComponent } from './who-min.component';

describe('WhoMinComponent', () => {
  let component: WhoMinComponent;
  let fixture: ComponentFixture<WhoMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
