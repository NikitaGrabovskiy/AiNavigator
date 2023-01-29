import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { GetToolsService } from 'src/app/service/get-tools.service';

@Component({
  selector: 'app-search-by-word',
  templateUrl: './search-by-word.component.html',
  styleUrls: ['./search-by-word.component.css']
})
export class SearchByWordComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  enteredSearchValue: string = "";

  getToolsService:GetToolsService;

  constructor(getToolsService:GetToolsService) { 
    this.getToolsService=getToolsService; 
  }

  ngOnInit(): void {
  }

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
    this.getToolsService.searchText=this.enteredSearchValue;
    this.parentFunction.emit("Event"); 
  }

}
