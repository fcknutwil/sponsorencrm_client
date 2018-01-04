
import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: "typ",
    template: "{{message}} <br /><button (click)='load()'>Load</button>"
})
export class TypComponent {

    private message: string = "Not loaded";

    constructor(private http: HttpClient) {}

    public load(): Promise<void>{
        return this.http
            .get("/typ")
            .toPromise()
            .then((response: any) => {
               this.message = response.message;
               // this.sessionService.create();
                //this.router.navigate(["/"]);
            }).catch((rej) => {
                this.message = rej.statusText;
            });
    }
}
