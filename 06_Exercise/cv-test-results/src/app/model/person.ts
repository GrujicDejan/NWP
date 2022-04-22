import { Skill } from "./skill";

export interface Person {
    firstName: string;
    lastName: string;
    jobTittle: string;
    imageURL: string;
    summary: string;
    email: string;
    linkedIn: string;
    address1: string;
    address2: string;
    skills: Array<Skill>
}