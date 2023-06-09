import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  exURL = 'https://java.dolaractual.net/experiencia'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.exURL + '/lista');
  }

  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.exURL + `/detail/${id}`);
    }

  public save(experiencia: Experiencia):Observable<any>{
  return this.httpClient.post<any>(this.exURL + '/create', experiencia);
  }    

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.exURL + `/update/${id}`, experiencia);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.exURL + `/delete/${id}`);
  }
}
