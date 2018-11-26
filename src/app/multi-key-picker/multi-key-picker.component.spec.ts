import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiKeyPickerComponent } from './multi-key-picker.component';

describe('MultiKeyPickerComponent', () => {
  let component: MultiKeyPickerComponent;
  let fixture: ComponentFixture<MultiKeyPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiKeyPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiKeyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
