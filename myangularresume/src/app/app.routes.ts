import { Routes } from '@angular/router';
import { MyresumeComponent } from './myresume/myresume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'myresume', component: MyresumeComponent },
  { path: 'contact', component: ContactComponent },
];
