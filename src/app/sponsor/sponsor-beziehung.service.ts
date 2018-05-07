import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Beziehung, BeziehungTyp, SponsorBeziehung} from "./sponsor-beziehung.types";

@Injectable()
export class SponsorBeziehungService {

  constructor(private http: HttpClient) {
  }

  public getBeziehungen(source: string): Promise<Beziehung[]> {
    return this.http
      .get<Beziehung[]>("/beziehungen/" + source)
      .toPromise();
  }

  public getList(sponsorId: number): Promise<SponsorBeziehung[]> {
    return this.http
      .get<SponsorBeziehung[]>("/sponsor/" + sponsorId + "/beziehung")
      .toPromise();
  }

  public get(sponsorId: string, id: string): Promise<SponsorBeziehung> {
    if (id === "new") {
      const sponsorEngament = new SponsorBeziehung();
      sponsorEngament.fk_sponsor = sponsorId as any;
      sponsorEngament.typ = BeziehungTyp.crm;
      return Promise.resolve(sponsorEngament);
    }
    return this.http
      .get<SponsorBeziehung>("/sponsor/" + sponsorId + "/beziehung/" + id)
      .toPromise();
  }

  public save(sb: SponsorBeziehung): Promise<SponsorBeziehung> {
    if (sb.id) {
      return this.http.put<SponsorBeziehung>(
        "/sponsor/" + sb.fk_sponsor + "/beziehung/" + sb.id, sb).toPromise();
    }
    return this.http.post<SponsorBeziehung>("/sponsor/" + sb.fk_sponsor + "/beziehung", sb).toPromise();
  }

  public delete(sb: SponsorBeziehung): Promise<any> {
    return this.http.delete("/sponsor/" + sb.fk_sponsor + "/beziehung/" + sb.id).toPromise();
  }
}
