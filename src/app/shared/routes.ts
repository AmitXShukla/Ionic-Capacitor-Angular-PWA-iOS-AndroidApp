import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { VideosComponent } from '../videos/videos.component';
import { ProjectsComponent } from '../projects/projects.component';

export const APP_ROUTES = RouterModule.forRoot([
    { path: 'aboutus', component: AboutusComponent },
    { path: 'blogs/:id', component: BlogsComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    //{ path: 'footer', component: FooterComponent }
    { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
]);