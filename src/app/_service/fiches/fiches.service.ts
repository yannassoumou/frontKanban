import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Fiche} from '../../domain/fiches';
import {ConfigService} from '../config/config.service';

const url = 'http://localhost:4200/fiche';

@Injectable({
  providedIn: 'root'
})
export class FichesService {

  constructor(private http: HttpClient, private handleError: ConfigService) { }

  getFicheById(id: string): Observable<Fiche>{
    return this.http.get<Fiche>('http://localhost:4200/fiche/' + id);
  }

  getAllFiche(): Observable<Fiche>{
    return this.http.get<Fiche>('http://localhost:4200/fiche');
  }

  getFicheByOwnerId(email: string): Observable<Fiche>{
    return this.http.get<Fiche>('http://localhost:4200/fiche/resp/' + email);
  }

  getFicheBySectionId(idSection: string): Observable<Fiche>{
    return this.http.get<Fiche>('http://localhost:4200/fiche/section/' + idSection);
  }

  getFicheBySectionByOwner(idSection: string, idOwner: string): Observable<Fiche>{
    return this.http.get<Fiche>('http://localhost:4200/fiche/section/' + idSection + '/resp/' + idOwner);
  }

  createFiche(fiche: Fiche): Observable<Fiche>{
    return this.http.post<Fiche>('http://localhost:4200/fiche', fiche);
  }

  updateFiche(idFiche: string, fiche: Fiche): Observable<Fiche>{
    return this.http.put<Fiche>('http://localhost:4200/fiche/' + idFiche, fiche);
  }

  deleteFiche(idFiche: string): Observable<Fiche>{
    return this.http.delete<Fiche>('http://localhost:4200/fiche/' + idFiche);
  }

  moveFiche(idFiche: string, idSectionFrom: string, idSectionTo: string, fiche: Fiche): Observable<Fiche>{
    return this.http.put<Fiche>('http://localhost:4200/fiche/' + idFiche + '/' + idSectionFrom + '/' + idSectionTo, fiche);
  }
}
