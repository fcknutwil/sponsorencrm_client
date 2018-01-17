import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Engagement} from "./engagement.types";
import {EngagementService} from "./engagement.service";
import {TypService} from "../typ/typ.service";
import {Typ} from "../typ/typ.types";

import * as _ from "lodash";
import {MatCheckboxChange} from "@angular/material";

@Component({
    selector: "engagement-form",
    template: require("./engagement.form.component.html")
})
export class EngagementFormComponent implements OnInit {

    public entry: Engagement;
    public typs: Typ[];

    constructor(private engagementService: EngagementService, private typService: TypService,
                private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe((params) =>
            this.engagementService.get(params.id).then((data) => {
                this.entry = data;
            }));
        this.typService.getList()
            .then((data) => {
                this.typs = data;
            });
    }

    public save(): void {
        this.engagementService.save(this.entry)
            .then(() => {
                this.router.navigate(["/engagement"]);
            });
    }

    public isTypChecked(id: number): boolean {
        return _.includes(this.entry.types, id);
    }

    public typChanged(event: MatCheckboxChange): void {
        if (!_.isArray(this.entry.types)) {
            this.entry.types = [];
        }
        if (!event.checked) {
            _.remove(this.entry.types, (v) => v === event.source.value);
        } else if (!this.entry.types.includes(event.source.value as any)) {
            this.entry.types.push(event.source.value as any);
        }
    }
}
