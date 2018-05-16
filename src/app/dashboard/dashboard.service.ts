import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DashboardDetail} from './dashboard.types';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public getList(): Promise<any> {
    return this.http
      .get<any>('/dashboard')
      .toPromise();
  }

  public getDetail(year: number): Promise<DashboardDetail[]> {
    return this.http
      .get<DashboardDetail[]>('/dashboard/' + year)
      .toPromise();
  }

}
