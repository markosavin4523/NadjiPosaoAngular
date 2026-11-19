export interface IJob {
    title : string,
    companyName : string,
    id : number,
    salaryFrom : number | null,
    salaryTo : number | null,
    category : string,
    city : string,
    deadline : Date,
    createdAt : Date,
    isActive : boolean,
    isLiked : boolean

}

export interface IJobDetails extends IJob {
    description : string;
    companyDescription : string,
    savesCount : number | null;
}