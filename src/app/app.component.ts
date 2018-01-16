import {MediaMatcher} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit, ChangeDetectorRef} from "@angular/core";
import {Subscription} from "rxjs";
import {PendingRequestService} from "./shared/pending-request.service";

@Component({
    selector: "sponsoren-crm-app",
    template: require("./app.component.html")
})
export class AppComponent implements OnInit, OnDestroy {
    private mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    public isOverlayVisible: boolean = false;
    public navItems: any[];
    private subscription: Subscription;

    constructor(private pendingRequestService: PendingRequestService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    public ngOnInit(): void {
        const self = this;
        this.subscription = this.pendingRequestService.hasPendingRequests()
            .subscribe((hasPendingRequests) => {
                self.isOverlayVisible = hasPendingRequests;
            });
        this.navItems = [
            {
                "link": "/",
                "text": "Sponsoren"
            },
            {
                "link": "/engagement",
                "text": "Engagements"
            },
            {
                "link": "/typ",
                "text": "Sponsortypen"
            }
        ]
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
