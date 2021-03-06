import {Moment} from 'moment';

export class SponsorEngagement {
  public id: number;
  public name: string;
  public fk_sponsor: number;
  public fk_engagement: number;
  public von: string | Moment;
  public bis: string | Moment;
}
