import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { KeyPickerTestBedComponent } from './key-picker-test-bed/key-picker-test-bed.component';
import { KeyPickerComponent } from './key-picker/key-picker.component';
import { MultiKeyPickerComponent } from './multi-key-picker/multi-key-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyPickerTestBedComponent,
    KeyPickerComponent,
    MultiKeyPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [KeyPickerTestBedComponent]
})
export class AppModule { }
