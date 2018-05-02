import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Dokument} from "./dokument.types";
import {Observable} from "rxjs";

@Injectable()
export class DokumentService {

    constructor(private http: HttpClient) {
    }

    public getList(sponsorId: number): Promise<Dokument[]> {
        return this.http
            .get<Dokument[]>("/sponsor/" + sponsorId + "/dokument")
            .toPromise();
    }

    public add(sponsorId: number, dokument: Dokument): Promise<Dokument> {
        return this.http
            .post<Dokument>("/sponsor/" + sponsorId + "/dokument", dokument)
            .toPromise();
    }

    public delete(sponsorId: number, dokumentId: number): Promise<any> {
        return this.http
            .delete("/sponsor/" + sponsorId + "/dokument/" + dokumentId)
            .toPromise();
    }

}
