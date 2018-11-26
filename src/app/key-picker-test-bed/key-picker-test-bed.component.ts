import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../entities/KeyValuePair'
@Component({
  selector: 'app-key-picker-test-bed',
  templateUrl: './key-picker-test-bed.component.html',
  styleUrls: ['./key-picker-test-bed.component.css']
})
export class KeyPickerTestBedComponent implements OnInit {
  testModel: {
    lookupListForPicker: KeyValuePair<string, string>[],
    pickedKey: string
  }
  constructor() { }
  ngOnInit() {

    this.testModel = {
      lookupListForPicker: [
        { "Key": "A", "Value": "Alpha" },
        { "Key": "B", "Value": "Beta" },
        { "Key": "G", "Value": "Gamma" }
      ], pickedKey: "B"
    };
  }
}
