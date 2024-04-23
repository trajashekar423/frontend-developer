import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { BannercontentComponent } from "./bannercontent/bannercontent.component";
import { WhatiwilldoComponent } from "./whatiwilldo/whatiwilldo.component";
import { FooterComponent } from "./footer/footer.component";
import { MyresumeComponent } from './myresume/myresume.component';
import { MyskillsComponent } from "./myskills/myskills.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, BannercontentComponent, WhatiwilldoComponent, FooterComponent, MyresumeComponent, MyskillsComponent]
})
export class AppComponent {
  title = 'myangularresume';
}
