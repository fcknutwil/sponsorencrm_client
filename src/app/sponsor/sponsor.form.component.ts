import {Component, OnInit} from "@angular/core";
import {Sponsor} from "./sponsor.types";
import {ActivatedRoute} from "@angular/router";
import {SponsorService} from "./sponsor.service";
import {OrtService} from "./ort.service";
import {Ort} from "./ort.types";
import {Observable} from "rxjs/Observable";
import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import * as _ from 'lodash';

@Component({
    selector: "sponsor-form",
    template: require("./sponsor.form.component.html"),
})
export class SponsorFormComponent implements OnInit {
    private sponsor: Sponsor;
    private ortList: Ort[];
    private filteredList: Observable<Ort[]>;
    plzort: FormControl = new FormControl('', {
            validators: this.invalidPlaceValidator()
        }
    );

    constructor(private service: SponsorService, private ortService: OrtService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.service.get(params['id']).then((data) => {
            this.sponsor = data;
            this.plzort.setValue(data.ort);
        }));
    }

    public invalidPlaceValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            return _.find(this.ortList, {'fullname': control.value}) ? null : {'kein gültiger Ort': {value: control.value}};
        };
    }

    public ngOnInit(): void {
        this.ortService.getList().then((data) => {
            this.ortList = data;
            this.filteredList = this.plzort.valueChanges
                .pipe(startWith(''), map(val => this.filter(val)));
        });

        this.plzort.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(term => {
                const ort = <Ort>_.find(this.ortList, {'fullname': term});
                if(ort) {
                    this.sponsor.fk_ort = ort.id;
                }
            });
    }

    filter(val: string): Ort[] {
        if (val.length < 3) {
            return [];
        }
        return this.ortList.filter(option =>
            _.includes(option.fullname.toLowerCase(), val.toLowerCase()));
    }

    optionSelected(event: any): void {
        console.log(event);
    }
    
    public save(): void {
        this.service.save(this.sponsor);
    }
}
