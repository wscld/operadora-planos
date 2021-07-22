import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Plano } from 'src/app/shared/models/plano.model';
import { Plataforma } from 'src/app/shared/models/plataforma.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private httpClient: HttpClient) { }

  obterPlataforma(plataformaSku: string): Observable<Plataforma> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plataforma>('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas', { headers }).pipe(
      map((res: any) => res.plataformas.find((plataformas: Plataforma) => plataformas.sku === plataformaSku))
    );
  }

  obterPlano(plataformaSku: string, planoSku: string): Observable<Plano> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plano>(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${plataformaSku}`, { headers }).pipe(
      map((res: any) => res.planos.find((plano: Plano) => plano.sku === planoSku))
    );
  }
}
