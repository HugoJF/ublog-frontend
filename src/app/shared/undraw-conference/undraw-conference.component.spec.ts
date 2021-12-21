import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndrawConferenceComponent } from './undraw-conference.component';

describe('UndrawConferenceComponent', () => {
  let component: UndrawConferenceComponent;
  let fixture: ComponentFixture<UndrawConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndrawConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndrawConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
