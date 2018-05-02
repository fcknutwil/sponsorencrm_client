import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SponsorBeziehungService} from "./sponsor-beziehung.service";
import {Beziehung, BeziehungTyp, SponsorBeziehung} from "./sponsor-beziehung.types";

@Component({
    selector: "sponsor-beziehung-form",
    template: require("./sponsor-beziehung.form.component.html")
})
export class SponsorBeziehungFormComponent implements OnInit {

    public parentId: string;
    public id: string;
    public entry: SponsorBeziehung;
    public crmBeziehungen: Beziehung[];
    public donatorenBeziehungen: Beziehung[];

    constructor(private router: Router, private route: ActivatedRoute, private service: SponsorBeziehungService,
                private beziehungService: SponsorBeziehungService) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => this.id = params.id);
        this.route.parent.params.subscribe((params) => this.parentId = params.id);

        this.beziehungService.getBeziehungen("crm").then((data) => this.crmBeziehungen = data);
        this.beziehungService.getBeziehungen("donator").then((data) => this.donatorenBeziehungen = data);

        this.service.get(this.parentId, this.id)
            .then((data) => {
                data.fk_sponsor = this.parentId as any;
                switch (data.typ) {
                    case BeziehungTyp.crm:
                        data.crmValue = data.value;
                        break;
                    case BeziehungTyp.donator:
                        data.donatorValue = data.value;
                        break;
                    case BeziehungTyp.other:
                        data.otherValue = data.value;
                        break;
                }
                this.entry = data;
            });
    }

    public save(): void {
        switch (this.entry.typ) {
            case BeziehungTyp.crm:
                this.entry.value = this.entry.crmValue;
                break;
            case BeziehungTyp.donator:
                this.entry.value = this.entry.donatorValue;
                break;
            case BeziehungTyp.other:
                this.entry.value = this.entry.otherValue;
                break;
        }
        this.service.save(this.entry)
            .then(() => {
                this.router.navigate(["/sponsor", this.parentId, {outlets: {beziehung: ["list"]}}]);
            });
    }

}
