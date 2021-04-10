import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableSortAndPaginationComponent } from './table-sort-and-pagination/table-sort-and-pagination.component';

/** Modules needed for 'table-sort-and-pagination' example: */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
/** */

@NgModule({
  declarations: [
    AppComponent,
    TableSortAndPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    /** Modules needed for 
     * 'table-sort-and-pagination' 
     * example: */
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    /** */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
