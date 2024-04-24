import { Component } from '@angular/core';
import { BannercontentComponent } from "../bannercontent/bannercontent.component";
import { MyskillsComponent } from "../myskills/myskills.component";
import { WhatiwilldoComponent } from "../whatiwilldo/whatiwilldo.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [BannercontentComponent, MyskillsComponent, WhatiwilldoComponent]
})
export class HomepageComponent {

}
