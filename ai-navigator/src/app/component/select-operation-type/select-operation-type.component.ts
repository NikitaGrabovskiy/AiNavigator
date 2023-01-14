import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-operation-type',
  templateUrl: './select-operation-type.component.html',
  styleUrls: ['./select-operation-type.component.css']
})
export class SelectOperationTypeComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  selectedNew:boolean = false;
  selectedEdit:boolean = false;
  selectedOther:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSelectingNew():void{
    this.selectedNew = true;
    this.newItemEvent.emit(true);
  }

  onSelectingEdit():void{
    this.selectedEdit = true;
    this.newItemEvent.emit(true);
  }


  onSelectingOther():void{
    this.selectedOther= true;
    this.newItemEvent.emit(true);
  }

}
