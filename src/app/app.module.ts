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
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
{
  path:"",component:AdminLoginComponent
},
{
  path:"/addStudent",component:AddStudentComponent
},
{
  path:"/viewAllStudent",component:ViewAllStudentComponent
},
{
  path:"/addFaculty",component:AddFacultyComponent
},
{
  path:"viewAllFaculty",component:ViewAllFacultyComponent
}
]
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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
