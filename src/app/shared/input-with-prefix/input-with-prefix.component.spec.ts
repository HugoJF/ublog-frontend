import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithPrefixComponent } from './input-with-prefix.component';

describe('InputWithPrefixComponent', () => {
  let component: InputWithPrefixComponent;
  let fixture: ComponentFixture<InputWithPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithPrefixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
