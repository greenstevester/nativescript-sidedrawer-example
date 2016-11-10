import {Component, NgZone, ChangeDetectorRef} from "@angular/core";
import {Page} from "ui/page";
import {DrawerService} from "../services/drawer.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'my-app',
    template: '<page-router-outlet class="page-bg"></page-router-outlet>',  // uses pages to navigate. The new components are shown in a new page.
})
export class AppComponent {

    constructor(private drawerService: DrawerService,
                private _page: Page,
                private _changeDetectionRef: ChangeDetectorRef,
                private routerExtensions: RouterExtensions) {

        console.log(`AppComponent constructor`);

    }

}