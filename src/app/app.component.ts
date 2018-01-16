import { Component, OnInit, OnDestroy } from "@angular/core";
import {Subscription} from "rxjs";
import {PendingRequestService} from "./shared/pending-request.service";

@Component({
    selector: "sponsoren-crm-app",
    template: require("./app.component.html")
})
export class AppComponent implements OnInit, OnDestroy {
    public isOverlayVisible: boolean = false;
    private subscription: Subscription;

    constructor(private pendingRequestService: PendingRequestService) {
    }

    public ngOnInit(): void {
        const self = this;
        this.subscription = this.pendingRequestService.hasPendingRequests()
            .subscribe((hasPendingRequests) => {
                self.isOverlayVisible = hasPendingRequests;
            });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
