import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


export interface myresume {
  year: string;
  university: string;
  school: string
  companyname: string;
  position: string;
  desrition: string;

}
@Component({
  selector: 'app-myresume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myresume.component.html',
  styleUrl: './myresume.component.css'
})
export class MyresumeComponent {

  heading = ['My Resume']
  myresume = [
    {
      university: 'State Board of Secondary Education',
      school: '10th(SSC) with 58% from Railway mixed high school affiliated to The Board of Secondary Education.',
      year: '2005',
    }
    ,
    {
      university: 'State Board Of Technical Education & Training',
      school: 'Polytechnic (DCCP) with 58 %from Sanjay Gandhi Collge affiliated to SBTET Hyderabad .',
      year: '2008',
    }
    ,
    {
      university: 'Osmania University',
      school: 'BCom(Computers) with 71 %from Sanjay Gandhi Memoral Collge affiliated to OU Hyderabad .',
      year: '2011',
    },
    {
      university: 'Osmania University',
      school: 'MBA(Finance) with 51 %from Prof. G. Ram Reddy Centre for Distance Education .',
      year: '2015',
    }
  ]


  myworks = [
    {
      companyname: 'Webadda',
      position: 'UI Designer',
      description: 'Generate mockups and wireframes using Adobe Illustrator. & Photoshop',
      year: '2012-April to July-2013',
    }
    ,
    {
      companyname: 'IkyaGlobal',
      position: 'UI Designer & Developer',
      description: 'Generate mockups and wireframes using Adobe Illustrator. & Photoshop',
      year: 'Aug-2013 to Sep-2015',
    }
    ,
    {
      companyname: 'DigitalMinds',
      position: 'UI Designer & Developer',
      description: 'Generate mockups and wireframes using Adobe Illustrator. & Photoshop',
      year: 'October-2015 to Aug-2017',
    },
    {
      companyname: 'TataConsultancy Service',
      position: 'Frontend UI&UX Designer, Developer',
      description: 'Mars Food is a segment of family owned Mars, Incorporated. For more than a century, Mars, Incorporated has been driven by the belief that the world we want tomorrow starts with how we do business today. Played a role of Team Member for various project of MARS. Applications like Unclebens, Miracoli, ebly, etc.',
      Resonsibity :"Extensively used Html5, CSS3,Java Script, and jQuery to enhance functionality and user experience on web pages, as well as bootstrap to develop responsive web design projects.",
      year: 'Sep-2017 - Current',
    }
  ]

}


