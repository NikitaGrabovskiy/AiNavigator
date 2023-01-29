import { Injectable } from '@angular/core';
import { ToolModel } from 'src/app/model/ToolModel';
import {TOOLMODELS} from '../data/saved-tools';
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
  selectedTag:string ="";

  searchText:string="";

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

    console.log("inside getSelectedTools()")
    console.log("search text " + this.searchText )

    //Select by keywords
    if(this.searchText!=""){
      resultArray = this.getToolsBySearchWord();
      this.searchText="";

      console.log("resultArray = "+ resultArray)
      return resultArray;
    }

    // Select by tags
    if(this.selectedTag != ""){

      resultArray = this.getToolsWithSelectedTag()
      this.selectedTag =""
      return resultArray;
    }

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

  getToolsWithSelectedTag():ToolModel[]{

    let allTools:ToolModel[]=TOOLMODELS;
    let resultArray:ToolModel[]=[];

    allTools.forEach((tool:ToolModel,index:number)=>{
      if(tool.tags.includes(this.selectedTag)){
        resultArray.push(allTools[index]);
      } 
    })

   return this.selectedTools = resultArray;
  }

  getToolsBySearchWord():ToolModel[]{

    let allTools:ToolModel[]=TOOLMODELS;
    let resultArray:ToolModel[]=[];

    this.searchText = this.searchText.toLocaleLowerCase();

    // Check if Name or description or tag contains search word
    allTools.forEach((tool:ToolModel,index:number)=>{

    if((tool.name.toLowerCase().includes(this.searchText) )
    || (tool.description.toLowerCase().includes(this.searchText))
    || (tool.tags.filter(tag=>tag.toLowerCase().includes(this.searchText)).length!=0)
      ) resultArray.push(allTools[index]);
    })

    // ADD check for tags

    return resultArray;
  }
  
}
