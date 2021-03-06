import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Logo} from './logo.types';

@Injectable()
export class LogoService {

  constructor(private http: HttpClient) {
  }

  public getList(sponsorId: number): Promise<Logo[]> {
    return this.http
      .get<Logo[]>('/sponsor/' + sponsorId + '/logo')
      .toPromise();
  }

  public add(sponsorId: number, logo: Logo): Promise<Logo> {
    return this.http
      .post<Logo>('/sponsor/' + sponsorId + '/logo', logo)
      .toPromise();
  }

  public delete(sponsorId: number, logoId: number): Promise<any> {
    return this.http
      .delete('/sponsor/' + sponsorId + '/logo/' + logoId)
      .toPromise();
  }

}
