import { Media } from '../enum/Media';
import { FreeOption } from '../enum/FreeOption';

export interface ToolModel{

    description:string,
    free:FreeOption,
    generate:boolean,
    toolUrl:string,
    media:Media,
    editExisting:boolean,
    name:string,
    youtubeUrl:string
    installationRequired:boolean,
    registrationRequired:boolean
}