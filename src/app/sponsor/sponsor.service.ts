import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sponsor} from './sponsor.types';

@Injectable()
export class SponsorService {

  constructor(private http: HttpClient) {
  }

  public getList(): Promise<Sponsor[]> {
    return this.http
      .get<Sponsor[]>('/sponsor')
      .toPromise();
  }

  public get(id: string): Promise<Sponsor> {
    if (id === 'new') {
      return Promise.resolve(new Sponsor());
    }
    return this.http
      .get<Sponsor>('/sponsor/' + id)
      .toPromise();
  }

  public save(sponsor: Sponsor): Promise<Sponsor> {
    if (sponsor.id) {
      return this.http.put<Sponsor>('/sponsor/' + sponsor.id, sponsor).toPromise();
    }
    return this.http.post<Sponsor>('/sponsor', sponsor).toPromise();
  }

  public delete(sponsor: Sponsor): Promise<any> {
    return this.http.delete('/sponsor/' + sponsor.id).toPromise();
  }
}
