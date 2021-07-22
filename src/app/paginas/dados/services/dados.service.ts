import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Plano } from 'src/app/shared/models/plano.model';
import { Plataforma } from 'src/app/shared/models/plataforma.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private httpClient: HttpClient) { }

  obterPlataforma(plataformaSku: string): Observable<Plataforma> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plataforma>(`${environment.apiUrl}/plataformas`, { headers }).pipe(
      map((res: any) => res.plataformas.find((plataformas: Plataforma) => plataformas.sku === plataformaSku))
    );
  }

  obterPlano(plataformaSku: string, planoSku: string): Observable<Plano> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plano>(`${environment.apiUrl}/planos/${plataformaSku}`, { headers }).pipe(
      map((res: any) => res.planos.find((plano: Plano) => plano.sku === planoSku))
    );
  }
}
