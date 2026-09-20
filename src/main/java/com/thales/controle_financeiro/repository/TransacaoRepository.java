package com.thales.controle_financeiro.repository;

import com.thales.controle_financeiro.entity.Transacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransacaoRepository extends JpaRepository<Transacao, Long> {
}