import { IBaseRegister } from "./i-base-register";

export interface IRegisterUser extends IBaseRegister{
    firstName: string,
    lastName : string,
    dateOfBirth : Date,
}

