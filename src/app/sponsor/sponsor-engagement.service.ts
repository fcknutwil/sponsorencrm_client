import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SponsorEngagement} from "./sponsor-engagement.types";

@Injectable()
export class SponsorEngagementService {

    constructor(private http: HttpClient) {
    }

    public getList(sponsorId: number): Promise<SponsorEngagement[]> {
        return this.http
            .get<SponsorEngagement[]>("/sponsor/" + sponsorId + "/engagement")
            .toPromise();
    }

    public get(sponsorId: string, id: string): Promise<SponsorEngagement> {
        if (id === "new") {
            let sponsorEngament = new SponsorEngagement();
            sponsorEngament.fk_sponsor = <any>sponsorId;
            return Promise.resolve(sponsorEngament);
        }
        return this.http
            .get<SponsorEngagement>("/sponsor/" + sponsorId + "/engagement/" + id)
            .toPromise();
    }

    public save(sponsorEngagement: SponsorEngagement): Promise<SponsorEngagement> {
        if (sponsorEngagement.id) {
            return this.http.put<SponsorEngagement>("/sponsor/" + sponsorEngagement.fk_sponsor + "/engagement/" + sponsorEngagement.id, sponsorEngagement).toPromise();
        }
        return this.http.post<SponsorEngagement>("/sponsor/" + sponsorEngagement.fk_sponsor + "/engagement", sponsorEngagement).toPromise();
    }

    public delete(sponsorEngagement: SponsorEngagement): Promise<any> {
        return this.http.delete("/sponsor/" + sponsorEngagement.fk_sponsor + "/engagement/" + sponsorEngagement.id).toPromise();
    }
}
