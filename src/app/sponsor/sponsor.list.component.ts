
import {Component, OnInit} from "@angular/core";
import {SponsorService} from "./sponsor.service";
import {Sponsor} from "./sponsor.types";

@Component({
    selector: "sponsorList",
    template: require("./sponsor.list.component.html")
})
export class SponsorListComponent implements OnInit {

    private list: Sponsor[];

    constructor(private service: SponsorService) {}

    public ngOnInit() {
        this.service.getList().then((data) => {
            this.list = data;
        });
    }
}
