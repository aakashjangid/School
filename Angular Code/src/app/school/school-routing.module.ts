import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolComponent } from './school.component';
import { ShowStudentComponent } from './components/show-student/show-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [{
  path: '', component: SchoolComponent, children:
    [
      { path: 'list', component: StudentsListComponent },
      { path: 'student/:id', component: ShowStudentComponent },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }, { path: '**', component: StudentsListComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
