import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDemoComponent } from './post-demo.component';

describe('PostDemoComponent', () => {
  let component: PostDemoComponent;
  let fixture: ComponentFixture<PostDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
