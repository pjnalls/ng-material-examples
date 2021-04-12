import { Component, OnInit } from '@angular/core';
import { ColumnHeader } from '../table-sort-and-pagination/table-sort-and-pagination.component';

/** Ensure that you update your 'app.module.ts' file
 * by importing the appropriate modules.
 *
 * See the 'app.module.ts' file comments for guidance.*/
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
/** */

import { PeriodicElementInterface } from '../periodic-element/periodic-element';
import { PeriodicElementService } from '../periodic-element/periodic-element.service';

/** @title Form field with label */
@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  message!: PeriodicElementInterface[];
  input!: PeriodicElementInterface;

  constructor(private fb: FormBuilder, private service: PeriodicElementService) {
    this.options = fb.group({});
  }

  ngOnInit() {
    this.service.currentMessage.subscribe((message) => (this.message = message));
    this.service.currentInput.subscribe((input) => {
      this.input = input;
      this.options = this.fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,  
        position: new FormControl(this.input.position),
        name: new FormControl(this.input.name),
        weight: new FormControl(this.input.weight),
        symbol: new FormControl(this.input.symbol),
      });
    });
  }

  columns: ColumnHeader[] = [
    { def: 'position', value: 360, header: 'No.' },
    { def: 'name', value: 'Angularoniumn', header: 'Name' },
    { def: 'weight', value: 9.142016, header: 'Weight' },
    { def: 'symbol', value: 'Ng', header: 'Symbol' },
  ];

  coolness = ['Excellent', 'Superb', 'Great', 'Nice', 'Terrific'];

  addElement() {
    const element = this.options.value;
    const data: PeriodicElementInterface = {};

    for (let prop in element) {
      if (prop === 'position' || prop === 'weight')
        element[prop] = parseFloat(element[prop]);
    }

    data['position'] = element['position'];
    data['name'] = element['name'];
    data['weight'] = element['weight'];
    data['symbol'] = element['symbol'];

    this.message.unshift(data)
    this.service.changeMessage(this.message);
  }
}
