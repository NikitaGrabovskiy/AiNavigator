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
  selectNotFree:boolean = false;
  generate:boolean = false;
  editExisting:boolean = false;
  freeVersionAvailable: boolean = false;
  selectedMedia:Media[] = [];

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
    this.editExisting=!this.editExisting;
    return this.getSelectedTools();
  }

  selectOrUnselectGenerate():ToolModel[]{
    this.generate=!this.generate;
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

    //console.log("this.freeOnly " + this.freeOnly);
    //console.log("this.freeVersionAvailable"+this.freeVersionAvailable);
    //console.log("this.selectNotFree"+this.selectNotFree);

    //console.log("All tools"+ allTools[0].generate);
    allTools.forEach((tool:ToolModel,index:number)=>{
      if(this.selectedMedia.find(x => x === tool.media) != undefined 
      && ((tool.editExisting == this.editExisting && tool.editExisting ==true)
      || (tool.generate == this.generate && tool.generate == true) )

       //Free option logic

      //&&((this.freeOnly && tool.free==FreeOption.Free)
     //|| (this.freeVersionAvailable&&(tool.free==FreeOption.Free
     //         ||tool.free==FreeOption.FreeVersionAvailable)
    //  ||this.selectNotFree))
      
      ) resultArray.push(allTools[index]);
    })

   return resultArray;
  }

  addMedia(media:Media):void{
    this.selectedMedia.push(media);
  }



  getToolsWithSelectedTag(tag:string){

    let allTools:ToolModel[]=TOOLMODELS;
    let resultArray:ToolModel[]=[];

    allTools.forEach((tool:ToolModel,index:number)=>{
      if(tool.tags.includes(tag)){
        resultArray.push(allTools[index]);
      } 
    })

   this.selectedTools = resultArray;
  }

}
