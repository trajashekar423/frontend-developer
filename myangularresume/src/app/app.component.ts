import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";

import { FooterComponent } from "./footer/footer.component";

import { HomepageComponent } from "./homepage/homepage.component";
import { GoogleMapsModule } from '@angular/google-maps'



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HomepageComponent,RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent,GoogleMapsModule,]
})
export class AppComponent {
  title = 'myangularresume';
}

//BannercontentComponent, WhatiwilldoComponent,  MyresumeComponent, MyskillsComponent, MyskillsComponent