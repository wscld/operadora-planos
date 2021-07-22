import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plano } from 'src/app/shared/models/plano.model';
import { Plataforma } from 'src/app/shared/models/plataforma.model';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  constructor(private httpClient: HttpClient) { }

  obterPlanosParaPlataforma(plataformaSku: string): Observable<Plano[]> {
    const headers = new HttpHeaders({ 'cache-response': 'true' });
    return this.httpClient.get<Plano[]>(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${plataformaSku}`, { headers })
      .pipe(map((res: any) =>
        res.planos.map((plano: Plano) =>
          new Plano(plano.sku, plano.franquia, plano.valor, plano.ativo))));
  }
}
