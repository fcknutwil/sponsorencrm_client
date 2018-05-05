import {MediaMatcher} from "@angular/cdk/layout";
import {Component, OnDestroy, OnInit, ChangeDetectorRef, ViewChild} from "@angular/core";
import {Subscription} from "rxjs";
import {PendingRequestService} from "./shared/pending-request.service";
import {SessionService} from "./shared/session.service";
import {MatDialog, MatSidenav} from "@angular/material";
import {YesNoDialogComponent} from "./shared/yes-no-dialog.component";
import {Router} from "@angular/router";

@Component({
    selector: "sponsoren-crm-app",
    templateUrl:  "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    public isOverlayVisible: boolean = false;
    public navItems: any[];
    private mobileQuery: MediaQueryList;
    private mobileQueryListener: () => void;
    private subscription: Subscription;

    @ViewChild(MatSidenav) sidenav: MatSidenav;

    constructor(private pendingRequestService: PendingRequestService, private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher, private sessionService: SessionService, private dialog: MatDialog,
                private router: Router) {
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

    public navigate(link: string): void {
        this.sidenav.close();
        this.router.navigate([link]);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    public isLoggedIn(): boolean {
        return this.sessionService.isActive();
    }

    public logout(): void {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
            data: {title: "Abmelden", text: "Wollen Sie sich wirklich abmelden?"}
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.sessionService.close();
                this.router.navigate(["/login"]);
            }
        });
    }
}
