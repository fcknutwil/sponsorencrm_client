import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SponsorEngagement} from './sponsor-engagement.types';

@Injectable()
export class SponsorEngagementService {

  constructor(private http: HttpClient) {
  }

  public getList(sponsorId: number): Promise<SponsorEngagement[]> {
    return this.http
      .get<SponsorEngagement[]>('/sponsor/' + sponsorId + '/engagement')
      .toPromise();
  }

  public get(sponsorId: string, id: string): Promise<SponsorEngagement> {
    if (id === 'new') {
      const sponsorEngament = new SponsorEngagement();
      sponsorEngament.fk_sponsor = sponsorId as any;
      return Promise.resolve(sponsorEngament);
    }
    return this.http
      .get<SponsorEngagement>('/sponsor/' + sponsorId + '/engagement/' + id)
      .toPromise();
  }

  public save(se: SponsorEngagement): Promise<SponsorEngagement> {
    if (se.id) {
      return this.http.put<SponsorEngagement>(
        '/sponsor/' + se.fk_sponsor + '/engagement/' + se.id, se).toPromise();
    }
    return this.http.post<SponsorEngagement>('/sponsor/' + se.fk_sponsor + '/engagement', se).toPromise();
  }

  public delete(se: SponsorEngagement): Promise<any> {
    return this.http.delete('/sponsor/' + se.fk_sponsor + '/engagement/' + se.id).toPromise();
  }
}
