import {Component, OnInit} from '@angular/core';
import {Sponsor} from './sponsor.types';
import {ActivatedRoute, Router} from '@angular/router';
import {SponsorService} from './sponsor.service';
import {OrtService} from './ort.service';
import {Ort} from './ort.types';
import {Observable} from 'rxjs';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

import * as _ from 'lodash';

@Component({
  selector: 'sponsor-form',
  templateUrl: './sponsor.form.component.html'
})
export class SponsorFormComponent implements OnInit {
  public plzort: FormControl = new FormControl('', {
      validators: this.invalidPlaceValidator()
    }
  );
  private sponsor: Sponsor;
  private ortList: Ort[];
  private filteredList: Observable<Ort[]>;

  constructor(private service: SponsorService, private ortService: OrtService, private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe((params) => this.service.get(params.id).then((data) => {
      this.sponsor = data;
      this.plzort.setValue(data.ort);
    }));
  }

  public invalidPlaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return _.find(this.ortList, {fullname: control.value})
        ? null : {'kein gültiger Ort': {value: control.value}};
    };
  }

  public ngOnInit(): void {
    this.ortService.getList().then((data) => {
      this.ortList = data;
      this.filteredList = this.plzort.valueChanges
        .pipe(startWith(''), map((val) => this.filter(val)));
    });

    this.plzort.valueChanges
      .subscribe((term) => {
        const ort = _.find(this.ortList, {fullname: term}) as Ort;
        if (ort) {
          this.sponsor.fk_ort = ort.id;
        }
      });
  }

  public filter(val: string): Ort[] {
    if (val.length < 3) {
      return [];
    }
    return this.ortList.filter((option) =>
      _.includes(option.fullname.toLowerCase(), val.toLowerCase()));
  }

  public optionSelected(event: any): void {
    // TODO: Prüfen was hier gemacht werden soll oder ob es entfernt werden kann
  }

  public save(): void {
    this.service.save(this.sponsor)
      .then(() => {
        this.router.navigate(['/sponsor']);
      });
  }
}
