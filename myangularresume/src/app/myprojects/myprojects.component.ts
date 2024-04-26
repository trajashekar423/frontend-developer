import { Component } from '@angular/core';


export interface myprojects {
  projectname: string;
  projectdes:string;
  projectimage:string;
  imageUrl: string;

}


@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.css'
})
export class MyprojectsComponent {
  heading = ['My Projects']


}
