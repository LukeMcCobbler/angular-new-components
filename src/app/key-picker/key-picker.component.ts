import { Component, OnInit, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { KeyValuePair } from '../entities/KeyValuePair';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'
@Component({
  selector: 'app-key-picker',
  templateUrl: './key-picker.component.html',
  styleUrls: ['./key-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KeyPickerComponent),
    multi: true
  }]
})
export class KeyPickerComponent implements OnInit {
  keyModel: string;
  updateChanges() {
    //this.onChange(this.value);
    console.log(this.keyModel);
    this.onChange(this.keyModel);
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
    writeValue(value: string): void {
      this.keyModel = value;
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
  private findKvpWithKey = (key: string) => {
    let matches = this.lookupList.filter(kvp => kvp.Key == key);
    if (matches.length > 0) {
      return matches[0];
    }
    else {
      return <KeyValuePair<string, string>>{ Key: "", Value: "" };
    }
  }
  valueExtractor = (key: any) => {
    let retval = this.findKvpWithKey(key).Value;
    return retval;
  };
  getValueWithKey = (key: string) => {
    let retval = this.findKvpWithKey(key).Value;
    return retval;
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.lookupList.filter(v => v.Value.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).map(v => v.Key))
    )
  constructor() { }
  ngOnInit() {

  }
}
