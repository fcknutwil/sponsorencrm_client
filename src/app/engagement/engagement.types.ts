import {Typ} from "../typ/typ.types";

export class Engagement {
    public id: number;
    public name: string;
    public betrag: number;
    public zahlung: Zahlung;
    public types: Typ[];
}

export enum Zahlung {
    Jährlich = "Jährlich",
    Einmalig = "Einmalig",
}
