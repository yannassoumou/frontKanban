import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section, SectionServiceRes} from '../../domain/section';

const url = 'http://localhost:8080/section';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
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

  setSection(section: Section): Observable<Section> {
    return this.http.post<Section>(url, section, httpOptions);
  }

}
