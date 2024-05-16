import { Routes } from '@angular/router';
import { MyresumeComponent } from './myresume/myresume.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';

export const routes: Routes = [
 
  {path: 'homepage', component: HomepageComponent },
    {path: 'myresume', component: MyresumeComponent },
    { path: 'myprojects', component: MyprojectsComponent },
    { path: 'contact', component: ContactComponent },
   
];
