// nativescript
import {DrawerService} from "../../services/drawer.service";
import {RouterExtensions} from "nativescript-angular";
import {Component, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit} from "@angular/core";
import {Observable} from "data/observable";

@Component({
  moduleId: module.id,
  selector: 'settings-help',
  templateUrl: 'help.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class HelpComponent extends Observable implements OnInit, AfterViewInit {

  constructor(private routerExtensions: RouterExtensions,
              private changeDetectionRef: ChangeDetectorRef,
              public drawerService: DrawerService) {

    super();
    console.log(`HelpComponent constructor`);
  }

  ngOnInit() {
    console.log(`HelpComponent ngOnInit`);
  }

  ngAfterViewInit() {
    console.log("HelpComponent ngAfterViewInit - this.drawerComponent.sideDrawer=", this.drawerService.drawer);
    this.changeDetectionRef.detectChanges();
  }

  navigateTo(pathToNavigate:string) {
    console.log("navigating to:", pathToNavigate);
    this.routerExtensions.navigate([pathToNavigate], {clearHistory: true});
  }

}