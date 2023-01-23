import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/enum/Media';
import { GetToolsService } from 'src/app/service/get-tools.service';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent implements OnInit {



  // TODO: Add saparate list of tags for Edit and for generate (10 total)
  imageTags:string [] = ["generative art","interactive art","generate image","remove something from imaga"];
  soundTags:string [] = ["generate music","change voice"];
  textTags:string [] = ["generate random text"];
  videoTags:string [] = ["add video effect"];
  otherTags:string [] = ["Other"];

  tagsOfSelectedMedia:string [] = [];

  getToolsService:GetToolsService;

  constructor(getToolsService:GetToolsService) { 
    this.getToolsService=getToolsService;
    if(this.getToolsService.selectedMedia.length>1){
      return;
    }
    if(this.getToolsService.selectedMedia[0]==Media.Image){
      this.tagsOfSelectedMedia = this.imageTags;
    }else if(this.getToolsService.selectedMedia[0]==Media.Sound){
      this.tagsOfSelectedMedia = this.soundTags;
    }else if(this.getToolsService.selectedMedia[0]==Media.Text){
      this.tagsOfSelectedMedia = this.textTags;
    }else if(this.getToolsService.selectedMedia[0]==Media.Video){
      this.tagsOfSelectedMedia = this.videoTags;
    }else if(this.getToolsService.selectedMedia[0]==Media.Other){
      this.tagsOfSelectedMedia = this.otherTags;
    }
  }

  ngOnInit(): void {
  }

  selectTag(tag:string):void{
    this.getToolsService.getToolsWithSelectedTag(tag);
    console.log(this.getToolsService.selectedTools)
  }

}
