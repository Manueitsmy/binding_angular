import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { users } from 'src/users-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  originalUserData = [];
  usersToDisplay = [];
  searchValue: string = '';
  selectedFilter: string = 'first';

  constructor(private dataService: DataService) {}

  ngOnInit() {
     this.originalUserData = this.dataService.getUsersData();
     this.usersToDisplay = [...this.originalUserData];      
    };

    onMonInputData(mot :string){
      this.searchValue = mot;
      this.filterData();         
    }

    filterData() {  

      this.usersToDisplay = this.originalUserData.filter((user) => 
      user.name[this.selectedFilter].toLowerCase().includes(this.searchValue.toLowerCase())
      );
      console.log(this.usersToDisplay);   
  }
    handFilterChange(selectedFilter: string){
    this.selectedFilter = selectedFilter
    this.filterData();
  }
}