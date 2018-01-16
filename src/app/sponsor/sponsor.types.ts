import {Ort} from "./ort.types";

export class Sponsor {
    public id: number;
    public name: string;
    public vorname?: string;
    public strasse?: string;
    public fk_ort: number;
    public ort: Ort;
    public ortstring: string;
    public telefon?: string;
    public email?: string;
    public homepage?: string;
    public notiz?: string;
    public typ: Sponsortyp;
}

export enum Sponsortyp {
    company = "company",
    individual = "individual",
}