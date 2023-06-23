import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweProjectsComponent } from './swe-projects.component';

describe('SweProjectsComponent', () => {
  let component: SweProjectsComponent;
  let fixture: ComponentFixture<SweProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
