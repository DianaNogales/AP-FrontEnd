import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.moldel';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

     URL = 'https://java.dolaractual.net/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable <persona>{
    return this.http.get<persona>(this.URL+ '/traer/perfil', {
    })
  }


}
