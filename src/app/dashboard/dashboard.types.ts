import {Zahlung} from '../engagement/engagement.types';

export class DashboardDetail {
  public sponsorId: number;
  public sponsor: string;
  public engagement: string;
  public betrag: number;
  public betragProRata!: string;
  public zahlung: Zahlung;
  public seebli: boolean;
  public von: string;
  public bis: string;
}
