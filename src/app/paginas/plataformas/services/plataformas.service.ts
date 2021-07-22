import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plataforma } from 'src/app/shared/models/plataforma.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlataformasService {

  constructor(private httpClient: HttpClient) { }

  obterPlataformas(): Observable<Plataforma[]> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plataforma[]>('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas', { headers })
      .pipe(map((res: any) => res.plataformas));
  }

}
