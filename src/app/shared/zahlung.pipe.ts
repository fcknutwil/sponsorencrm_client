import {Pipe, PipeTransform} from "@angular/core";
import {Zahlung} from "../engagement/engagement.types";

@Pipe({name: "zahlung"})
export class ZahlungPipe implements PipeTransform {
  public transform(value: string): string {
    if (value === Zahlung.annual) {
      return "Jährlich";
    } else if (value === Zahlung.onetime) {
      return "Einmalig";
    }
    return "???";
  }
}
