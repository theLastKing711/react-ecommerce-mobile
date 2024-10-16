import { CursorPaginatedResult } from "./shared";

export type CursorPaginatedParentCategorisList = CursorPaginatedResult<ParentCategoryItem>


export type ParentCategoryItem = {
    id: number;
    parent_id?: number;
    name: string
}