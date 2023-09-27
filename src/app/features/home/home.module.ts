import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HelpRoutingModule
    ]
})
export class HomeModule { }
