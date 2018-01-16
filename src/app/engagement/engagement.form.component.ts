import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Engagement} from "./engagement.types";
import {EngagementService} from "./engagement.service";

@Component({
    selector: "engagement-form",
    template: require("./engagement.form.component.html")
})
export class EngagementFormComponent implements OnInit {

    public entry: Engagement;

    constructor(private engagementService: EngagementService, private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe((params) =>
            this.engagementService.get(params.id).then((data) => {
                this.entry = data;
            }));
    }

    public save(): void {
        this.engagementService.save(this.entry)
            .then(() => {
                this.router.navigate(["/engagement"]);
            });
    }

}
