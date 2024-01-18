import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() enterData = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit() {}

  monInput(event: Event){
    const inputValue = (event.target as HTMLInputElement).value;
    this.enterData.emit(inputValue);
  }
}
