import {Pipe, PipeTransform} from "@angular/core";
import {BeziehungTyp} from "../sponsor/sponsor-beziehung.types";

@Pipe({name: "beziehungtyp"})
export class BeziehungtypPipe implements PipeTransform {
  public transform(value: string): string {
    if (value === BeziehungTyp.crm) {
      return "CRM";
    } else if (value === BeziehungTyp.donator) {
      return "Donatoren";
    } else if (value === BeziehungTyp.other) {
      return "Andere";
    }
    return "???";
  }
}
