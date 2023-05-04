/**
 * TODO 
 * Fazer function qtd_pagamento
 */

// ATUALIZAR CASO PRECISE ADICIONAR OU REMOVER RESTAURANTE INICIAL
// ACHO QUE NUNCA HAVERÁ ESSE POSSBILIDADE, MAS FICA AÍ A EXPLICAÇÃO :)
const LINHA_INICIAL_SUB = 5;
const LINHA_INICIAL_REST = 15;

const QTD_SUB = () => {
  let linha_final = 'SUB-TOTAL 1'
  let linha_atual = ''
  let ss = getSheet(1);
  let total = 0;
  while (true){
    linha_atual = ss.getRange((total)+LINHA_INICIAL_SUB, 1).getValue();
    if(linha_final === linha_atual) break;
    total++
  }
  return total;
};
const QTD_REST = () => {
  let linha_final = 'SUB-TOTAL 2'
  let linha_atual = ''
  let ss = getSheet(1);
  let total = 0;
  while (true){
    linha_atual = ss.getRange((total)+LINHA_INICIAL_REST, 1).getValue();
    if(linha_final === linha_atual) break;
    total++
  }
  return total;
};
const LINHA_FINAL_SUB = (LINHA_INICIAL_SUB + QTD_SUB())-1;
const LINHA_FINAL_REST = (LINHA_INICIAL_REST + QTD_REST())-1;

const LINHA_PERCENT_PARCIAL_SUB = (LINHA_FINAL_SUB + 1);
const LINHA_PERCENT_PARCIAL_REST = LINHA_FINAL_REST + 1;

const LINHA_PERCENT_TOTAL = LINHA_PERCENT_PARCIAL_REST + 1;

// ATUALIZAR CASO HAJA ALGUMA FORMA DE PAGAMENTO NOVA OU RETIRAR ALGUMA
// A INICIAL TAMBÉM, MAS ACHO QUE NUNCA SÉRA ATUALIZADA
const LINHA_PGMT = 3;
const COL_INICIAL_PGMT = 2;
const COL_FINAL_PGMT = 7;
const COL_TOTAIS = COL_FINAL_PGMT + 1;
const COL_PERCET_PARCIAL = COL_TOTAIS + 1;
const COL_PERCET_TOTAL = COL_PERCET_PARCIAL + 1;

//CASO MUDE ALGO DAS DUAS CONSTANTES DE COLUNA ACIMA, LEMBRE DE ATUALIZAR AQUI:
const COLUNAS = new Map([[2, "B"], [3, "C"], [4, "D"],[5, "E"], [6, "F"], [7,"G"],[8,"H"],[9,"I"],[10,"J"]]); 
