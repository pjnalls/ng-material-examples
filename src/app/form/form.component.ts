import { Component, OnInit } from '@angular/core';
import { ColumnHeader } from '../table-sort-and-pagination/table-sort-and-pagination.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(fb: FormBuilder, private service: PeriodicElementService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      position: new FormControl(),
      name: new FormControl(),
      weight: new FormControl(),
      symbol: new FormControl(),
    });
  }

  ngOnInit() {
    this.service.currentMessage.subscribe((message) => (this.message = message));
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
