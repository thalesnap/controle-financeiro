import { Component, OnInit } from '@angular/core';
import { TransacaoService } from './transacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App implements OnInit {

  transacoes: any[] = [];

  constructor(private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.transacaoService.listar().subscribe(dados => {
      this.transacoes = dados;
    });
  }

  calcularSaldo(): number {
    return this.transacoes.reduce((saldo, transacao) => {
      if (transacao.tipo === 'ENTRADA') {
        return saldo + transacao.valor;
      }

      return saldo - transacao.valor;
    }, 0);
  }

  adicionar(descricao: string, valor: number, tipo: string, data: string) {
    const transacao = {
      descricao,
      valor,
      tipo,
      data
    };

    this.transacaoService.salvar(transacao).subscribe(novaTransacao => {
      this.transacoes.push(novaTransacao);
    });
  }
  deletar(id: number) {
    this.transacaoService.deletar(id).subscribe(() => {
      this.transacoes = this.transacoes.filter(t => t.id !== id);
    });
  }
  editandoId: number | null = null;

  editar(transacao: any) {
    this.editandoId = transacao.id;
  }

  atualizar(descricao: string, valor: number, tipo: string, data: string) {
    const transacao = {
      descricao,
      valor,
      tipo,
      data
    };

    this.transacaoService.atualizar(this.editandoId!, transacao).subscribe(() => {
      this.transacaoService.listar().subscribe(dados => {
        this.transacoes = dados;
        this.editandoId = null;
      });
    });
  }
}