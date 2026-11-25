import { IBaseProfile } from "./i-base-profile";

export interface ICompanyProfile extends IBaseProfile{
    role : "Company",
    name : string,
    description : string,
    address : string,
    city : string,
    phoneNumber : string
}
