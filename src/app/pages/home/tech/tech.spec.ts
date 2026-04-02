import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech } from './tech';

describe('Tech', () => {
  let component: Tech;
  let fixture: ComponentFixture<Tech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tech],
    }).compileComponents();

    fixture = TestBed.createComponent(Tech);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
