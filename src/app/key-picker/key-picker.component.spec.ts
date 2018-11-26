import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPickerComponent } from './key-picker.component';

describe('KeyPickerComponent', () => {
  let component: KeyPickerComponent;
  let fixture: ComponentFixture<KeyPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
