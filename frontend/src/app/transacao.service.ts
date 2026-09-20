import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://localhost:8080/transacoes';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.apiUrl);
  }
  salvar(transacao: any) {
    return this.http.post(this.apiUrl, transacao);
  }

  deletar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  atualizar(id: number, transacao: any) {
    return this.http.put(`${this.apiUrl}/${id}`, transacao);
  }
}