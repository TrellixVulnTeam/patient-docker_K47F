import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { PatientInfo } from '../model/patientinfo';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  patient: PatientInfo;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private patientService: PatientService
    ) { }

  ngOnInit(): void {
    const patientId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatient(patientId).subscribe(
      response => {
        this.patient = response;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
