export class Engagement {
    public id: number;
    public name: string;
    public betrag: number;
    public zahlung: Zahlung;
    public types: number[];
}

export enum Zahlung {
    annual = "annual",
    onetime = "onetime",
}
