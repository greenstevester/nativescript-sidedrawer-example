// nativescript
import {
    ViewChild,
    ElementRef,
    OnInit,
    AfterViewInit,
    OnDestroy,
    Component,
    ChangeDetectionStrategy
} from "@angular/core";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";
import {Animation} from "ui/animation";
import {User} from "./user.model";
import {DrawerService} from "../../services/drawer.service";
import {RouterExtensions} from "nativescript-angular";

// NOTE: copied from the groceries example (https://github.com/NativeScript/sample-Groceries/) and stripped down.
@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html",
    styleUrls: ["login-common.css", "login.component.css"],
    changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

    user: User;
    isLoggingIn = true;
    isAuthenticating = false;

    @ViewChild("mainContainer") mainContainer: ElementRef;
    @ViewChild("formControls") formControls: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;


    constructor(private routerExtensions: RouterExtensions,
                public drawerService: DrawerService,
                private page: Page) {

        this.user = new User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";

    }

    ngOnInit() {
        this.showMainContent();
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }


    focusPassword() {
        this.password.nativeElement.focus();
    }

    submit() {
        this.login();
    }

    navigateTo(pathToNavigate: string) {
        console.log("navigating to:", pathToNavigate);
        this.routerExtensions.navigate([pathToNavigate], {clearHistory: true});
    }

    login() {
        console.log("login");
        alert("you just did a fake login!");
        this.navigateTo('/home');
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        let mainContainer = <View>this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }


    showMainContent() {
        let mainContainer = <View>this.mainContainer.nativeElement;
        let formControls = <View>this.formControls.nativeElement;
        let animations = [];

        // Fade out the initial content over one half second

        mainContainer.style.visibility = "visible";

        // Fade in the main container and logo over one half second.
        animations.push({target: mainContainer, opacity: 1, duration: 500});

        // Slide up the form controls and sign up container.
        animations.push({target: formControls, translate: {x: 0, y: 0}, opacity: 1, delay: 650, duration: 150});

        // Kick off the animation queue
        new Animation(animations, false).play();

    }

    startBackgroundAnimation(background) {
        background.animate({
            scale: {x: 1.0, y: 1.0},
            duration: 10000
        });
    }

    setTextFieldColors() {
        let emailTextField = <TextField>this.email.nativeElement;
        let passwordTextField = <TextField>this.password.nativeElement;

        let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;

    }


}
