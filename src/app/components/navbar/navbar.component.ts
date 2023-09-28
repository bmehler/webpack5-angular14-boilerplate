import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    title = 'Angular 15 & Webpack 5 Boilerplate';
    home = 'Home';
    help = 'Need Help?';
} 