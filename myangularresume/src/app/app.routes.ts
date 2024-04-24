import { Routes } from '@angular/router';
import { MyresumeComponent } from './myresume/myresume.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  {path: 'homepage', component: HomepageComponent },
    {path: 'myresume', component: MyresumeComponent },
    { path: 'contact', component: ContactComponent },
];
