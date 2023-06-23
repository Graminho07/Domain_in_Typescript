class Produto {
  id: string;
  tamanho: string;
  cor: string;
}

class Estoque {
  produto: Produto;
  quantidadeDisponivel: number;
  quantidadeMinima: number;
}

class Venda {
  produto: Produto;
  quantidadeVendida: number;
  lucroGerado: number;
}

class Fornecedor {
}

class SistemaGerenciamentoEstoque {
  rastrearMovimentacoesProduto(idProduto: string): Movimentacao[] {
  }

  definirQuantidadeMinimaEstoque(idProduto: string, quantidadeMinima: number): void {
  }

  receberAlertaEstoqueBaixo(): void {
  }

  visualizarHistoricoVendas(periodo: string): Venda[] {
  }

  visualizarTendenciasEstoque(): Estoque[] {
  }

  criarOrdemCompraAutomatica(): void {
  }

  receberAtualizacoesPrazosEntrega(): void {
  }
}
