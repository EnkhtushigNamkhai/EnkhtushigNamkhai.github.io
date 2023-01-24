import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkComponent } from './artwork.component';

describe('ArtworkComponent', () => {
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
