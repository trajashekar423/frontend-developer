import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.css'
})
export class MyskillsComponent {
    myskills=['html','css']
}
