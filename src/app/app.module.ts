import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewAllStudentComponent } from './view-all-student/view-all-student.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ViewAllFacultyComponent } from './view-all-faculty/view-all-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminLoginComponent,
    AddStudentComponent,
    ViewAllStudentComponent,
    AddFacultyComponent,
    ViewAllFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
