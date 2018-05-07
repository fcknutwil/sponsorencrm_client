import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Engagement} from "./engagement.types";

@Injectable()
export class EngagementService {

  constructor(private http: HttpClient) {
  }

  public getList(): Promise<Engagement[]> {
    return this.http
      .get<Engagement[]>("/engagement")
      .toPromise();
  }

  public get(id: string): Promise<Engagement> {
    if (id === "new") {
      return Promise.resolve(new Engagement());
    }
    return this.http
      .get<Engagement>("/engagement/" + id)
      .toPromise();
  }

  public save(engagement: Engagement): Promise<Engagement> {
    if (engagement.id) {
      return this.http.put<Engagement>("/engagement/" + engagement.id, engagement).toPromise();
    } else {
      return this.http.post<Engagement>("/engagement", engagement).toPromise();
    }
  }

  public delete(engagement: Engagement): Promise<any> {
    return this.http.delete("/engagement/" + engagement.id).toPromise();
  }
}
