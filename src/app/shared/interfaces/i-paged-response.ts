export interface IPagedResponse<T> {
    totalCount : number,
    pagesCount : number,
    currentPage : number,
    perPage : number,
    items : T[]
}

export interface IPagedSearch
{
    page : number | null ,
    perPage : number | null,
}