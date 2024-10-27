import { CursorPaginatedResult } from "./shared";

export type CursorPaginatedFavouriteProductList =
    CursorPaginatedResult<FavouriteProductItem>;

export type FavouriteProductList = FavouriteProductItem[];

export type FavouriteProductItem = {
    id: number;
    name: string;
    price: number;
    is_favourite: boolean;
    image_url?: string;
}