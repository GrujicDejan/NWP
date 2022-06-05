import { MovieInfoModel } from "./movieInfoModel";

export interface MovieRatingChange {
    movie: MovieInfoModel;
    changeInRating: number;
}