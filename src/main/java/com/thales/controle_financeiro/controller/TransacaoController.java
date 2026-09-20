package com.thales.controle_financeiro.controller;

import com.thales.controle_financeiro.entity.Transacao;
import com.thales.controle_financeiro.service.TransacaoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transacoes")
public class TransacaoController {

    private final TransacaoService service;

    public TransacaoController(TransacaoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Transacao> listarTodas() {
        return service.listarTodas();
    }
}