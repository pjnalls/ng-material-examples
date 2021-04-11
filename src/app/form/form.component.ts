import { Component } from '@angular/core';
import { ColumnHeader } from '../table-sort-and-pagination/table-sort-and-pagination.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  columns: ColumnHeader[] = [
    { def: '360', header: 'No.' },
    { def: 'Angularoniumn', header: 'Name' },
    { def: '9.142016', header: 'Weight' },
    { def: 'Ng', header: 'Symbol' },
  ];

  coolness = ['Excellent', 'Superb', 'Great', 'Nice', 'Terrific'];
}
