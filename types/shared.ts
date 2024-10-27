export type CursorPaginatedResult<T> = {
    data: T[];
    next_cursor: string ;
    per_page: number;
}

export type PaginatedResult<T> = {
    data: T[];
}

export type InifinteQueryPageParam = {
    pageParam: null | string;
}