import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cidade } from '../models/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  // url = 'http://localhost:3000/cidade'; // api rest fake
  url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/41/municipios';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos as cidade
  getCidade(): Observable<Cidade[]> {
    return this.httpClient.get<Cidade[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem uma cidade pelo id
  //getCidadeById(id: number): Observable<Cidade> {
  //  return this.httpClient.get<Cidade>(this.url + '/' + id)
  //    .pipe(
  //      retry(2),
  //      catchError(this.handleError)
  //    )
  //}

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}