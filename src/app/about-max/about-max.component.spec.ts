import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaxComponent } from './about-max.component';

describe('AboutMaxComponent', () => {
  let component: AboutMaxComponent;
  let fixture: ComponentFixture<AboutMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
