import { Component, OnInit } from '@angular/core';
import { GetToolsService } from 'src/app/service/get-tools.service';
import { Media } from '../../enum/Media';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select-media-type',
  templateUrl: './select-media-type.component.html',
  styleUrls: ['./select-media-type.component.css']
})
export class SelectMediaTypeComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  getToolsService:GetToolsService;

  constructor(getToolsService:GetToolsService) {
    this.getToolsService=getToolsService;
   }

  ngOnInit(): void {
  }

  onSelectingImage():void{
    this.getToolsService.addMedia(Media.Image)
    this.newItemEvent.emit(true);
  }

  onSelectingSound():void{
    this.getToolsService.addMedia(Media.Sound)
    this.newItemEvent.emit(true);
  }

  onSelectingText():void{
    this.getToolsService.addMedia(Media.Text)
    this.newItemEvent.emit(true);
  }

  onSelectingOther():void{
    this.getToolsService.addMedia(Media.Other)
    this.newItemEvent.emit(true);
  }

}
