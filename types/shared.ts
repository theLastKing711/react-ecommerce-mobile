export type CursorPaginatedResult<T> = {
    data: T[];
    next_cursur: string;
    per_page: number;
}