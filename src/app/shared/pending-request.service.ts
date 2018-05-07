import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class PendingRequestService {

  private count = 0;
  private replaySubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  public hasPendingRequests(): Observable<boolean> {
    return this.replaySubject.asObservable();
  }

  public request(): void {
    this.count++;
    if (1 === this.count) {
      this.replaySubject.next(true);
    }
  }

  public response(): void {
    this.count--;
    if (0 === this.count) {
      this.replaySubject.next(false);
    }
  }

}
