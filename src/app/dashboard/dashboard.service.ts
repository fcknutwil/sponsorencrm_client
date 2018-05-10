import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public getList(): Promise<any> {
    return this.http
      .get<any>('/dashboard')
      .toPromise();
  }

}
