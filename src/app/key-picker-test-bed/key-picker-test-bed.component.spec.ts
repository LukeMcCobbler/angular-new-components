import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPickerTestBedComponent } from './key-picker-test-bed.component';

describe('KeyPickerTestBedComponent', () => {
  let component: KeyPickerTestBedComponent;
  let fixture: ComponentFixture<KeyPickerTestBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPickerTestBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPickerTestBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
