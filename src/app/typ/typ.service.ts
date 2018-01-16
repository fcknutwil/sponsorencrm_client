import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Typ} from "./typ.types";

@Injectable()
export class TypService {

    constructor(private http: HttpClient) {
    }

    public getList(): Promise<Typ[]> {
        return this.http
            .get<Typ[]>("/typ")
            .toPromise();
    }

    public get(id: string): Promise<Typ> {
        if (id === "new") {
            return Promise.resolve(new Typ());
        }
        return this.http
            .get<Typ>("/typ/" + id)
            .toPromise();
    }

    public save(typ: Typ): Promise<Typ> {
        if (typ.id) {
            return this.http.put<Typ>("/typ/" + typ.id, typ).toPromise();
        } else {
            return this.http.post<Typ>("/typ", typ).toPromise();
        }
    }

    public delete(typ: Typ): Promise<any> {
        return this.http.delete("/typ/" + typ.id).toPromise();
    }
}
