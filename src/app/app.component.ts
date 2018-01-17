import {MediaMatcher} from "@angular/cdk/layout";
import {Component, OnDestroy, OnInit, ChangeDetectorRef} from "@angular/core";
import {Subscription} from "rxjs";
import {PendingRequestService} from "./shared/pending-request.service";

@Component({
    selector: "sponsoren-crm-app",
    template: require("./app.component.html")
})
export class AppComponent implements OnInit, OnDestroy {
    public isOverlayVisible: boolean = false;
    public navItems: any[];
    private mobileQuery: MediaQueryList;
    private mobileQueryListener: () => void;
    private subscription: Subscription;

    constructor(private pendingRequestService: PendingRequestService, private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher) {
    }

    public ngOnInit(): void {
        this.mobileQuery = this.media.matchMedia("(max-width: 600px)");
        this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);

        const self = this;
        this.subscription = this.pendingRequestService.hasPendingRequests()
            .subscribe((hasPendingRequests) => {
                self.isOverlayVisible = hasPendingRequests;
            });
        this.navItems = [{
            link: "/",
            text: "Sponsoren"
        }, {
            link: "/engagement",
            text: "Engagements"
        }, {
            link: "/typ",
            text: "Sponsortypen"
        }];
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
