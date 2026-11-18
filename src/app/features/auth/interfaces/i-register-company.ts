import { IBaseRegister } from "./i-base-register";

export interface IRegisterCompany extends IBaseRegister{
    name : string,
    description : string,
    cityId: number,
    phoneNumber : string,
    address : string
}
