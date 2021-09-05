import { Component, OnInit } from '@angular/core';
import { PatientNote } from '../model/patientnote';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { PatientInfo } from '../model/patientinfo';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.scss']
})
export class PatientNoteComponent implements OnInit {

  patientNote: PatientNote;
  patient: PatientInfo;
  patientNoteForm: FormGroup;
  newPatientNote: PatientNote;

  constructor(
    private route: ActivatedRoute,
    private routeNav: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private patientService : PatientService
  ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatientNote(patientId).subscribe(
      response => {
        this.patientNote = response;
        this.initForm(response);
      }
    );
    this.patientService.getPatient(patientId).subscribe(
      reponse => {
        this.patient = reponse;
      }
    );
  }

  initForm(patientNote:PatientNote){
    this.patientNoteForm = this.formBuilder.group({
      notes:patientNote.notes
    });
  }

  onSubmitForm(){
    this.patientService.editPatientNote(this.patient.id, this.patientNoteForm.value).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  resetPatientNote(patientNoteId: string){
    let newPatientNote: PatientNote = {
      patientId: String(this.patient.id),
      notes: ''
    };
    let id = Number(patientNoteId)
    this.patientService.editPatientNote(id, newPatientNote).subscribe(
      response => {
        this.routeNav.navigate(['/patients']);
      },
      error => console.log(error)
    );
  }
}
