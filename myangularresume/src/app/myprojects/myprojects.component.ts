import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


export interface myprojects {
  projectname: string;
  projectdes: string;
  projectimage: string;
  imageUrl: string;
  role: string;
  Organization: string;
  Description: string;
  Responsibilities: string;

}


@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.css'
})
export class MyprojectsComponent {
  
  heading = ['My Projects']
myproject: any;
  

}
