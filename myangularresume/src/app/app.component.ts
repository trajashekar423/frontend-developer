import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { BannercontentComponent } from "./bannercontent/bannercontent.component";
import { WhatiwilldoComponent } from "./whatiwilldo/whatiwilldo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CommonModule, BannercontentComponent, WhatiwilldoComponent]
})
export class AppComponent {
  title = 'myangularresume';
}
