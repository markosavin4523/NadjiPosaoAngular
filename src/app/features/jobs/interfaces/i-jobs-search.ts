import { IPagedSearch } from "../../../shared/interfaces/i-paged-response";

export interface IJobsSearch extends IPagedSearch {
    titleKeyword : string | null,
    salaryFrom : number | null,
    sortBy : string | null,
    category : number | null,
    city : number | null
}
