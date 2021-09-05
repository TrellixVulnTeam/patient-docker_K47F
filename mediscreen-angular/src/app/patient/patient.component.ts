import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientInfo } from '../model/patientinfo';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patients: PatientInfo[] = [];
  patient: PatientInfo;

  constructor(
    private route: Router,
    private patientService : PatientService
    ) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      reponse => {
        this.patients = reponse;
      }
    );
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(
      reponse => {
        let patientId = String(id);
        this.patientService.deletePatientNote(patientId).subscribe(
          reponse => {
            this.patients = this.patients.filter(patient => patient.id !== id);
          }
        );
      }
    );
  }
}
