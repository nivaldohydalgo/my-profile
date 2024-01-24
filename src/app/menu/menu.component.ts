import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import { HomeComponent } from '../home/home.component'
import { ProjectsComponent } from '../projects/projects.component'
import { AboutComponent } from '../about/about.component'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatTabsModule,
    HomeComponent,
    ProjectsComponent,
    AboutComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
