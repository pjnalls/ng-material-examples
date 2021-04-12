import { AfterViewInit, Component, ViewChild } from '@angular/core';

/** Ensure that you update your 'app.module.ts' file
 * by importing the appropriate modules.
 *
 * See the 'app.module.ts' file comments for guidance.*/
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
/** */

import { PeriodicElementService } from '../periodic-element/periodic-element.service';
import { PeriodicElementInterface } from '../periodic-element/periodic-element';

/**
 * @title Table example with pagination and sorting
 */
@Component({
  selector: 'app-table-sort-and-pagination',
  templateUrl: './table-sort-and-pagination.component.html',
  styleUrls: ['./table-sort-and-pagination.component.scss'],
})
export class TableSortAndPaginationComponent implements AfterViewInit {
  message!: PeriodicElementInterface[];
  dataSource: MatTableDataSource<PeriodicElementInterface> = 
    new MatTableDataSource<PeriodicElementInterface>();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private data: PeriodicElementService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
      this.dataSource.data = message;
    });
  }

  columns: ColumnHeader[] = [
    { def: 'position', header: 'No.' },
    { def: 'name', header: 'Name' },
    { def: 'weight', header: 'Weight' },
    { def: 'symbol', header: 'Symbol' },
  ];
}

export interface ColumnHeader {
  def: string;
  value?: string | number | undefined;
  header: string;
}
