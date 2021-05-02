import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section, SectionServiceRes} from '../../domain/section';
import {Kanban, KanbanServiceRes} from '../../domain/kanban';


const url = 'http://localhost:4200/kanban';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  getKanban(): Observable<KanbanServiceRes> {
    return this.http.get<KanbanServiceRes>(url);
  }

  setKanban(kanban: Kanban): Observable<boolean> {
    return this.http.post<boolean>(url, kanban, httpOptions);
  }

}
