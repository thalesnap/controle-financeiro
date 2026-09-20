package com.thales.controle_financeiro.service;

import com.thales.controle_financeiro.entity.Transacao;
import com.thales.controle_financeiro.repository.TransacaoRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TransacaoService {

    private final TransacaoRepository repository;

    public TransacaoService(TransacaoRepository repository) {
        this.repository = repository;
    }

    public List<Transacao> listarTodas() {
        return repository.findAll();
    }
}