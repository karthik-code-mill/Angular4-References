import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorService } from './services/author.service';
import { AuthorComponent } from './components/author/author.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { CourseCreationComponent } from './components/forms/course-creation/course-creation.component';
import { SignupFormComponent } from './components/signup/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostComponentComponent } from './components/post-component/post-component.component';
import { PostServiceService } from './services/post-service.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GitFollowersService } from './services/git-followers-service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavouriteComponent,
    CourseCreationComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostComponentComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthorService,
    PostServiceService,
    GitFollowersService,
    {provide:ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
