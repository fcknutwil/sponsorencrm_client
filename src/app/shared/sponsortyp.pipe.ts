import {Pipe, PipeTransform} from "@angular/core";
import {Sponsortyp} from "../sponsor/sponsor.types";

@Pipe({name: "sponsortyp"})
export class SponsortypPipe implements PipeTransform {
    public transform(value: string): string {
        if (value === Sponsortyp.company) {
            return "Firma";
        } else if (value === Sponsortyp.individual) {
            return "Privatperson";
        }
        return "???";
    }
}
