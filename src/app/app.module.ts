import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './shared/routes';
import { ElishCustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideosComponent } from './videos/videos.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutusComponent,
    BlogsComponent,
    VideosComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    ElishCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
