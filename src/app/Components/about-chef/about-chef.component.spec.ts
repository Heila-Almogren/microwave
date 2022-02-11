import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChefComponent } from './about-chef.component';

describe('AboutChefComponent', () => {
  let component: AboutChefComponent;
  let fixture: ComponentFixture<AboutChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
