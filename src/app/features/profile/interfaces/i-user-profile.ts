import { IBaseProfile } from "./i-base-profile";

export interface IUserProfile extends IBaseProfile {
    role: "User"
    firstName : string,
    lastName : string,
    dateOfBirth : Date
}
