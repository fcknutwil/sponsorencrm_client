export class SponsorBeziehung {
    public id: number;
    public typ: BeziehungTyp;
    public value: string;
    public name: string;
    public notizen: string;
    public fk_sponsor: number;
}

export class Beziehung {
    public id: number;
    public typ: BeziehungTyp;
    public vorname: string;
    public nachname: string;
    public ort: string;
}

export enum BeziehungTyp {
    crm = "crm",
    donator = "donator",
    other = "other"
}
