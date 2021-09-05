import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientInfo } from '../model/patientinfo';
import { PatientNote } from '../model/patientnote';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  patient: PatientInfo;
  patientAddForm: FormGroup;

  constructor(
    private route:Router,
    private location: Location,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.patientAddForm = this.formBuilder.group({
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      gender:'',
      address:'',
      phone:''
    });
  }

  onSubmitForm(){
    this.patientService.addPatient(this.patientAddForm.value).subscribe(
      response => {
        this.patient = response;
        let patientId = String(this.patient.id);
        this.createPatientNote(patientId);
      }
    );
  }

  createPatientNote(patientId: string){
    let newPatientNote: PatientNote = {
      patientId: patientId,
      notes:''
    }
    this.patientService.savePatientNote(newPatientNote).subscribe(
      response => {
        this.route.navigate(['/patients']);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
