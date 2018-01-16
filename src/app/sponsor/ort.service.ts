import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Ort} from "./ort.types";

@Injectable()
export class OrtService {

    constructor(private http: HttpClient) {}

    public getList(): Promise<Ort[]> {
        return this.http
            .get<Ort[]>("/ort")
            .toPromise();
    }

}
