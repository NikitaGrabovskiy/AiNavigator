import { FreeOption } from "../enum/FreeOption";
import { Media } from "../enum/Media";

export const TOOLMODELS =[
    {
        description:"Test service description",
        free:FreeOption.Free,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Image,
        editExisting:true,
        name:"IMAGE FREE service",
        youtubeUrl:"https://www.youtube.com/"
    },
    {
        description:"Test service description",
        free:FreeOption.FreeVersionAvailable,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Image,
        editExisting:true,
        name:"IMAGE Free version service",
        youtubeUrl:"https://www.youtube.com/"
    },
    {
        description:"Test service description",
        free:FreeOption.NotFree,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Image,
        editExisting:true,
        name:"IMAGE NOT FREE service",
        youtubeUrl:"https://www.youtube.com/"
    },

    {
        description:"Test service description",
        free:FreeOption.FreeVersionAvailable,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Sound,
        editExisting:true,
        name:"SOUND service",
        youtubeUrl:"https://www.youtube.com/"
    },
    {
        description:"Test service description",
        free:FreeOption.FreeVersionAvailable,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Text,
        editExisting:true,
        name:"TEXT service",
        youtubeUrl:"https://www.youtube.com/"
    },
    {
        description:"Test service description",
        free:FreeOption.FreeVersionAvailable,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Video,
        editExisting:true,
        name:"VIDEO service",
        youtubeUrl:"https://www.youtube.com/"
    },
    {
        description:"Test service description",
        free:FreeOption.FreeVersionAvailable,
        generate:true,
        toolUrl:"https://www.youtube.com/",
        media:Media.Other,
        editExisting:true,
        name:"OTHER service",
        youtubeUrl:"https://www.youtube.com/"
    }
]