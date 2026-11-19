export class PaginationHandler<TSearch> {
    page: number = 1;
    perPage: number = 6;
    totalCount: number = 0;
    filter: Partial<TSearch> = {};

    setFilter(filter: TSearch): void {
        this.page = 1;
        this.filter = filter;
    }

    setPage(page: number, perPage: number) {
        this.page = page + 1;
        this.perPage = perPage;


    }
    getRequestParams(): TSearch {
        return {
            ...this.filter,
            page: this.page,
            perPage: this.perPage
        } as TSearch;
    }

    

}