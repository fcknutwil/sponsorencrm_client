import {Component, Input, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {SponsorEngagementService} from "./sponsor-engagement.service";
import {SponsorEngagement} from "./sponsor-engagement.types";

@Component({
    selector: "sponsor-engagement-list",
    template: require("./sponsor-engagement.list.component.html"),
})
export class SponsorEngagementListComponent implements OnInit {
    public id: number;
    public dataSource: MatTableDataSource<SponsorEngagement>;

    constructor(private route: ActivatedRoute, private service: SponsorEngagementService) {
    }

    public ngOnInit(): void {
        this.loadTable();
    }

    private loadTable(): void {
        this.route.parent.params.subscribe(params => {
            if (params.id !== "new") {
                this.id = params.id;
                this.service.getList(params.id).then((data) => this.dataSource = new MatTableDataSource(data));
            }
        });
    }
}