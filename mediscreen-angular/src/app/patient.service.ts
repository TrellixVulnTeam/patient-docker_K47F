import { Injectable } from '@angular/core';
import { PatientInfo } from './model/patientinfo';
import { PatientNote } from './model/patientnote';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientReport } from './model/patientreport';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  // PATIENT

  getPatients(): Observable<PatientInfo[]>{
    return this.httpClient.get<PatientInfo[]>('http://localhost:8084/patients');
  }

  getPatient(id: number): Observable<PatientInfo>{
    return this.httpClient.get<PatientInfo>('http://localhost:8084/patient-info/' + id);
  }

  deletePatient(id: number): Observable<PatientInfo>{
    return this.httpClient.delete<PatientInfo>('http://localhost:8084/patient/' + id);
  }

  editPatient(id: number, params:any): Observable<any>{
    return this.httpClient.put<PatientInfo>('http://localhost:8084/patient/' + id, params);
  }

  addPatient(params:any): Observable<any>{
    return this.httpClient.post<PatientInfo>('http://localhost:8084/patient/', params);
  }

  // NOTES

  getPatientNote(id: number): Observable<PatientNote>{
    return this.httpClient.get<PatientNote>('http://localhost:8084/patient-note/' + id);
  }

  editPatientNote(id: number, params:any): Observable<any>{
    return this.httpClient.put<PatientNote>('http://localhost:8084/patient-note/' + id, params);
  }

  deletePatientNote(id: string): Observable<any>{
    return this.httpClient.delete<PatientNote>('http://localhost:8084/patient-note/' + id);
  }

  savePatientNote(params: any): Observable<any>{
    return this.httpClient.post<PatientNote>('http://localhost:8084/patient-note/', params);
  }

  // RAPPORT

  getPatientReport(id: number): Observable<PatientReport>{
    return this.httpClient.get<PatientReport>('http://localhost:8084/patient-report/' + id);
  }


}
