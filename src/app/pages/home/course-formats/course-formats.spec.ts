import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormats } from './course-formats';

describe('CourseFormats', () => {
  let component: CourseFormats;
  let fixture: ComponentFixture<CourseFormats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFormats],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseFormats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
