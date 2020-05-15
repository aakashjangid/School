import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './components/header/header.component';
import { ShowStudentComponent } from './components/show-student/show-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SchoolComponent, HeaderComponent, ShowStudentComponent, StudentsListComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SchoolModule { }
