import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { PatientReportComponent } from './patient-report/patient-report.component';

const appRoutes : Routes = [
  {path:'patients', component: PatientComponent},
  {path:'patient-info/:id', component: PatientInfoComponent},
  {path:'patient-edit/:id', component: PatientEditComponent},
  {path:'patient-add', component: PatientAddComponent},
  {path:'patient-note/:id', component: PatientNoteComponent},
  {path:'patient-report/:id', component: PatientReportComponent},
  {path:'**', redirectTo:'/patients'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
