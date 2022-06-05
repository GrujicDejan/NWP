import { CharacterModel } from './characterModel';

export interface MovieInfoModel{
    name:string;
    year:number;
    imageUrl:string;
    country:string;
    imdbLink:string;
    wikipedia:string;
    rating:number;
    summary:string;
    characters:Array<CharacterModel>;
}