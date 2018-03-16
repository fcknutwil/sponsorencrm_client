import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SponsorBeziehungService} from "./sponsor-beziehung.service";
import {Beziehung, SponsorBeziehung} from "./sponsor-beziehung.types";

@Component({
    selector: "sponsor-beziehung-form",
    template: require("./sponsor-beziehung.form.component.html")
})
export class SponsorBeziehungFormComponent implements OnInit {

    public parentId: string;
    public id: string;
    public entry: SponsorBeziehung;
    public beziehungs: Beziehung[];

    constructor(private router: Router, private route: ActivatedRoute, private service: SponsorBeziehungService,
                private beziehungService: SponsorBeziehungService) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => this.id = params.id);
        this.route.parent.params.subscribe((params) => this.parentId = params.id);

        this.beziehungService.getBeziehungen().then((data) => this.beziehungs = data);

        this.service.get(this.parentId, this.id)
            .then((data) => {
                this.entry = data;
            });
    }

    public save(): void {
        this.service.save(this.entry)
            .then(() => {
                this.router.navigate(["/sponsor", this.parentId, {outlets: {beziehung: ["list"]}}]);
            });
    }

}
