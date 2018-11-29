import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMoreComponent } from './area-more.component';

describe('AreaMoreComponent', () => {
  let component: AreaMoreComponent;
  let fixture: ComponentFixture<AreaMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
