// nativescript
import {DrawerService} from "../../services/drawer.service";
import {RouterExtensions} from "nativescript-angular";
import {Component, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit} from "@angular/core";
import {Observable} from "data/observable";

@Component({
  moduleId: module.id,
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class WelcomeComponent extends Observable implements OnInit, AfterViewInit {

  constructor(private routerExtensions: RouterExtensions,
              private changeDetectionRef: ChangeDetectorRef,
              public drawerService: DrawerService) {

    super();
    console.log(`WelcomeComponent constructor`);
  }

  ngOnInit() {
    console.log(`WelcomeComponent ngOnInit`);
  }

  ngAfterViewInit() {
    console.log("WelcomeComponent ngAfterViewInit - this.drawerComponent.sideDrawer=", this.drawerService.drawer);
    this.changeDetectionRef.detectChanges();
  }


}