import { Component, OnInit, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyValuePair } from '../entities/KeyValuePair';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'


@Component({
  selector: 'app-multi-key-picker',
  templateUrl: './multi-key-picker.component.html',
  styleUrls: ['./multi-key-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiKeyPickerComponent),
    multi: true
  }]

})
export class MultiKeyPickerComponent implements OnInit {
  updateChanges() {
    //this.onChange(this.value);
    console.log(this.keyListModel);
    this.onChange(this.keyListModel);
  }
  /**
     * Invoked when the model has been changed
     */
  onChange: (_: any) => void = (_: any) => { };

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => { };
  ///////////////
  // OVERRIDES //
  ///////////////

  /**
   * Writes a new item to the element.
   * @param value the value
   */
  writeValue(value: string[]): void {
    this.keyListModel = value;
    this.updateChanges();
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  @Input() lookupList: KeyValuePair<string, string>[];
  keyListModel: string[];
  getValueFromKey = (key: string) => {
    let matches = this.lookupList.filter(kvp => kvp.Key == key);
    if (matches.length > 0) {
      return matches[0].Value;
    }
    else {
      return "";
    }
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.lookupList.filter(v => v.Value.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).map(v => v.Key))
    );
  removeKeyFromList = (ordinal: number) => {
    this.keyListModel.splice(ordinal, 1);
  }
  @Input() allowDuplicates:Boolean;
  keyToAdd: string;
  addKeyToList = () => {
    if (this.keyToAdd) {
      this.keyListModel.push(this.keyToAdd);
      this.keyToAdd = "";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
