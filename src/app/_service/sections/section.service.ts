import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section, SectionServiceRes} from '../../domain/section';

const url = 'http://localhost:4200/section';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) {
  }

  getSection(): Observable<SectionServiceRes> {
    return this.http.get<SectionServiceRes>(url);
  }

  setSection(section: Section): Observable<boolean> {
    return this.http.post<boolean>(url, section, httpOptions);
  }

  setSectionToTbk(data): void {

  }

}
