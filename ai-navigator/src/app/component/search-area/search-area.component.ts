import { Component, OnInit,Input, OnChanges, SimpleChanges} from '@angular/core';
import { ToolModel } from 'src/app/model/ToolModel';
import { GetToolsService } from 'src/app/service/get-tools.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent implements OnInit, OnChanges {

  @Input()tools:ToolModel[] = [];


 getToolsService:GetToolsService;

 constructor(getToolsService:GetToolsService) { 
   this.getToolsService=getToolsService;
 }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tools']) {
      this.tools = this.getToolsService.getSelectedTools();
    }
  }

}
