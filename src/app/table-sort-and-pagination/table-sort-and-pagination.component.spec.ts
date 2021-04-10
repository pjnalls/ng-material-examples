import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortAndPaginationComponent } from './table-sort-and-pagination.component';

describe('TableSortAndPaginationComponent', () => {
  let component: TableSortAndPaginationComponent;
  let fixture: ComponentFixture<TableSortAndPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortAndPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortAndPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
