import { Component } from "@angular/core";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.css',
    standalone: true,
})
export class NavBarComponent{
    title = 'Navigation Bar';
}