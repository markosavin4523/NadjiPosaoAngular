export interface ICreateJob {
    title : string,
    description : string,
    salaryFrom : number | null,
    salaryTo : number | null,
    deadline : Date,
    categoryId : number
}
