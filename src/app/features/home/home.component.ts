import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    welcomeTitle = 'Welcome to Angular 15';
    welcomeText = 'This is a Angular and Webpack Boilerplate Template containing Jest for testing.This example uses Lazy Loading to speed up the Application.';
    welcomeButton = 'Try it out!';

    webpackTitle = 'Webpack 5';
    webpackText = 'This Boilerplate containes an dev and prod environment. In the production environment an optimization is included which compress the bundle.js and makes it faster.';
    webpackButtonText1 = 'npm run start:prod';
    webpackButtonText2 = 'npm run start:dev';

    jestAngularPresetTitle = 'Jest Angular Preset';
    jestAngularPresetText = 'For testing the Angular Application Jest is included. You can run Unit Tests and check the test coverage overall.';
    jestAngularPresetButton1 = 'npm run test';
    jestAngularPresetButton2 = '>npm run test:coverage';
}
