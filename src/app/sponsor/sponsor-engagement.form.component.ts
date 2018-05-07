import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SponsorEngagementService} from './sponsor-engagement.service';
import {SponsorEngagement} from './sponsor-engagement.types';
import {EngagementService} from '../engagement/engagement.service';
import {Engagement} from '../engagement/engagement.types';
import {isMoment} from 'moment';

@Component({
  selector: 'sponsor-engagement-form',
  templateUrl: './sponsor-engagement.form.component.html'
})
export class SponsorEngagementFormComponent implements OnInit {

  public parentId: string;
  public id: string;
  public entry: SponsorEngagement;
  public engagements: Engagement[];

  constructor(private router: Router, private route: ActivatedRoute, private service: SponsorEngagementService,
              private engagementService: EngagementService) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => this.id = params.id);
    this.route.parent.params.subscribe((params) => this.parentId = params.id);

    this.engagementService.getList().then((data) => this.engagements = data);

    this.service.get(this.parentId, this.id)
      .then((data) => {
        this.entry = data;
      });
  }

  public save(): void {
    if (isMoment(this.entry.von)) {
      this.entry.von = this.entry.von.format('YYYY-MM-DD');
    }
    if (isMoment(this.entry.bis)) {
      this.entry.bis = this.entry.bis.format('YYYY-MM-DD');
    }
    this.service.save(this.entry)
      .then(() => {
        this.router.navigate(['/sponsor', this.parentId, {outlets: {engagement: ['list']}}]);
      });
  }

}
