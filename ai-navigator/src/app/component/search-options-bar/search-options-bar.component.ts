import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/enum/Media';
import { ToolModel } from 'src/app/model/ToolModel';
import { GetToolsService } from 'src/app/service/get-tools.service';

@Component({
  selector: 'app-search-options-bar',
  templateUrl: './search-options-bar.component.html',
  styleUrls: ['./search-options-bar.component.css']
})
export class SearchOptionsBarComponent implements OnInit{


  defaultImageSelectedChecked:boolean = false;
  defaultSoundSelectedChecked:boolean = false;
  defaultTextSelectedChecked:boolean = false;
  defaultVideoSelectedChecked:boolean = false;
  defaultOtherSelectedChecked:boolean = false;

  defaultGenerateSelectedChecked:boolean = false;
  defaultEditSelectedChecked:boolean = false;

  getToolsService:GetToolsService;
  tools:ToolModel[];

  constructor(getToolsService:GetToolsService) { 
    this.getToolsService=getToolsService;
    this.tools = getToolsService.getSelectedTools();
  }

  

  ngOnInit(): void {

    this.defaultImageSelectedChecked = this.getToolsService.selectedMedia.indexOf(Media.Image) > -1;
    this.defaultSoundSelectedChecked = this.getToolsService.selectedMedia.indexOf(Media.Sound) > -1;
    this.defaultTextSelectedChecked = this.getToolsService.selectedMedia.indexOf(Media.Text) > -1;
    this.defaultVideoSelectedChecked = this.getToolsService.selectedMedia.indexOf(Media.Video) > -1;
    this.defaultOtherSelectedChecked = this.getToolsService.selectedMedia.indexOf(Media.Other) > -1;

    this.defaultGenerateSelectedChecked = this.getToolsService.generate;
    this.defaultEditSelectedChecked = this.getToolsService.editExisting;
  }


  onSelectingImage():void{
    this.tools = this.getToolsService.selectOrUnselectMedia(Media.Image);
  }

  onSelectingSound():void{
    this.tools = this.getToolsService.selectOrUnselectMedia(Media.Sound);
  }

  onSelectingText():void{
    this.tools = this.getToolsService.selectOrUnselectMedia(Media.Text);
  }

  onSelectingVideo():void{
    this.tools = this.getToolsService.selectOrUnselectMedia(Media.Video);
  }

  onSelectingOther():void{
    this.tools = this.getToolsService.selectOrUnselectMedia(Media.Other);
  }

  onSelectingEdit():void{
    this.tools = this.getToolsService.selectOrUnselectEdit();
  }

  onSelectingGenerate():void{
    this.tools = this.getToolsService.selectOrUnselectGenerate();
  }

  onSelectingFree():void{
    this.tools = this.getToolsService.selectFreeOnly();
  }

  onSelectingFreeVersion():void{
    this.tools = this.getToolsService.selectFreeVersionAvailable();
  }

  onSelectingAll():void{
      this.tools = this.getToolsService.selectNotFreeOption();
  }


  parentFunction(data:any):void{
    this.tools = [];
  }
  
}
