import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { PatientReportComponent } from './patient-report/patient-report.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientInfoComponent,
    PatientEditComponent,
    PatientAddComponent,
    PatientNoteComponent,
    PatientReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
