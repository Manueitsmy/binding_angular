import { Component, EnvironmentInjector, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() filterSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onFilterChange(event: any){
    const selectedFilter = event.target.value;
    this.filterSelected.emit(selectedFilter);
  }
}
