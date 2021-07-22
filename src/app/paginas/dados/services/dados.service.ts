import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<Plataforma>('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').pipe(
      map((res: any) => res.plataformas.filter((plataformas: Plataforma) => plataformas.sku === plataformaSku))
    );
  }

  obterPlano(plataformaSku: string, planoSku: string): Observable<Plano> {
    return this.httpClient.get<Plano>(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${plataformaSku}`).pipe(
      map((res: any) => res.planos.filter((plano: Plano) => plano.sku === planoSku))
    );
  }
}
