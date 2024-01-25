import { Component } from '@angular/core';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { HomeComponent } from '../home/home.component'
import { ProjectsComponent } from '../projects/projects.component'
import { CoursesComponent } from '../courses/courses.component'
import { AboutComponent } from '../about/about.component'
import { ContactComponent } from '../contact/contact.component'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    HomeComponent,
    ProjectsComponent,
    CoursesComponent,
    AboutComponent,
    ContactComponent,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
