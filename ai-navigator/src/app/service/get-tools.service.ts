import { Injectable } from '@angular/core';
import { ToolModel } from 'src/app/model/ToolModel';
import {TOOLMODELS} from '../data/saved-tools';
import { FreeOption } from '../enum/FreeOption';
import { Media } from '../enum/Media';

@Injectable({
  providedIn: 'root'
})
export class GetToolsService {

  freeOnly:boolean = true;
  selectNotFree:boolean = true;


  generate:boolean = true;
  freeVersionAvailable: boolean = true;
  selectedMedia:Media[] = [];
  editExisting:boolean = true;

  selectedTools:ToolModel[]=TOOLMODELS;

  constructor() { }

  getAll():ToolModel[]{
    return TOOLMODELS;
  }

  selectOrUnselectMedia(media:Media):ToolModel[]{
    if(this.selectedMedia.find(x => x === media)==undefined){
      this.selectedMedia.push(media);
    }else{
          let resultArray:Media[]=[];
          this.selectedMedia.forEach((element:Media,index:number)=>{
          if(element!== media) resultArray.push(this.selectedMedia[index]);
   })
    this.selectedMedia=resultArray;
    }
    return this.getSelectedTools();
  }

  selectOrUnselectEdit():ToolModel[]{
    this.editExisting==!this.editExisting;
    return this.getSelectedTools();
  }

  selectOrUnselectGenerate():ToolModel[]{
    this.generate==!this.generate;
    return this.getSelectedTools();
  }

  selectFreeOnly():ToolModel[]{
    this.freeOnly=true;
    this.freeVersionAvailable=false;
    this.selectNotFree=false;
    return this.getSelectedTools();
  }

  selectFreeVersionAvailable():ToolModel[]{

    this.freeVersionAvailable=true;
    this.freeOnly=false;
    this.selectNotFree=false;
    return this.getSelectedTools();
  }

  selectNotFreeOption():ToolModel[]{
    this.selectNotFree=true;
    this.freeVersionAvailable=false;
    this.freeOnly=false;
    return this.getSelectedTools();
  }


  

  getSelectedTools():ToolModel[]{

    let allTools:ToolModel[]=TOOLMODELS;
    let resultArray:ToolModel[]=[];

    console.log("this.freeOnly " + this.freeOnly);
    console.log("this.freeVersionAvailable"+this.freeVersionAvailable);
    console.log("this.selectNotFree"+this.selectNotFree);

    allTools.forEach((tool:ToolModel,index:number)=>{
      if(this.selectedMedia.find(x => x === tool.media) != undefined 
      && tool.editExisting == this.editExisting
      && tool.generate == this.generate 

      // Free option logic

      &&((this.freeOnly && tool.free==FreeOption.Free)
      || (this.freeVersionAvailable&&(tool.free==FreeOption.Free
              ||tool.free==FreeOption.FreeVersionAvailable)
      ||this.selectNotFree))
      
      ) resultArray.push(allTools[index]);
    })

   return resultArray;
  }

  addMedia(media:Media):void{
    console.log("media selected!!!");
    this.selectedMedia.push(media);
  }





}
