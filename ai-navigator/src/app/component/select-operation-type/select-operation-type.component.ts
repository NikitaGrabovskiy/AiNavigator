import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetToolsService } from 'src/app/service/get-tools.service';

@Component({
  selector: 'app-select-operation-type',
  templateUrl: './select-operation-type.component.html',
  styleUrls: ['./select-operation-type.component.css']
})
export class SelectOperationTypeComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  getToolsService:GetToolsService;

  constructor(getToolsService:GetToolsService) {
    
    this.getToolsService = getToolsService;
   }

  ngOnInit(): void {
  }

  onSelectingNew():void{
    this.getToolsService.generate = true;
    this.newItemEvent.emit(true);
  }

  onSelectingEdit():void{
    this.getToolsService.editExisting = true;
    this.newItemEvent.emit(true);
  }
}
