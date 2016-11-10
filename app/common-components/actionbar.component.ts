import {Component} from '@angular/core';
import {DrawerService} from "../services/drawer.service";

@Component({
    moduleId: module.id,
    selector: 'MainActionBar',
    templateUrl: 'actionbar.component.html'
})
export class MainActionBarComponent {

    constructor(private drawerService: DrawerService) {

    }
}