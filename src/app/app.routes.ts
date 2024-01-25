import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ProjectsComponent } from './projects/projects.component'
import { CoursesComponent } from './courses/courses.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent },
];
