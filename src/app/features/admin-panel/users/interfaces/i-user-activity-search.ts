import { IPagedSearch } from "../../../../shared/interfaces/i-paged-response";

export interface IUserActivitySearch extends IPagedSearch{
    username: string | null;
}
