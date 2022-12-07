export class ToolModel {
    description:string;
    free:boolean;
    freeVersionAvailable:boolean;
    toolUrl:string;
    name:string;
    youtubeUrl:string;

    constructor(  discription:string,
        free:boolean,
        freeVersionAvailable:boolean,
        toolUrl:string,
        name:string,
        youtubeUrl:string) {
        this.description=discription,
        this.free = free,
        this.freeVersionAvailable=freeVersionAvailable,
        this.name = name;
        this.toolUrl=toolUrl;
        this.description = discription;
        this.youtubeUrl =youtubeUrl;
       }

}
