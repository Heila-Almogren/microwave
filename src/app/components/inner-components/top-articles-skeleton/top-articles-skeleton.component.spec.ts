import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArticlesSkeletonComponent } from './top-articles-skeleton.component';

describe('TopArticlesSkeletonComponent', () => {
  let component: TopArticlesSkeletonComponent;
  let fixture: ComponentFixture<TopArticlesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopArticlesSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArticlesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
