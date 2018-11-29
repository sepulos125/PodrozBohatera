import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoGalleryComponent } from './foto-gallery.component';

describe('FotoGalleryComponent', () => {
  let component: FotoGalleryComponent;
  let fixture: ComponentFixture<FotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
