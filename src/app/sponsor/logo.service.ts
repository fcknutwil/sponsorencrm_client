import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Dokument} from "./dokument.types";
import {Observable} from "rxjs";
import {Logo} from "./logo.types";

@Injectable()
export class LogoService {

    constructor(private http: HttpClient) {
    }

    public getList(sponsorId: number): Promise<Logo[]> {
        return this.http
            .get<Logo[]>("/sponsor/" + sponsorId + "/logo")
            .toPromise();
    }

    public add(sponsorId: number, logo: Logo): Promise<Logo> {
        return this.http
            .post<Logo>("/sponsor/" + sponsorId + "/logo", logo)
            .toPromise();
    }

}
