
  /**
   * insere nova loja
   * i (index): nome da planilha
   * line: a linha que deseja que ela fique
   * name: nome da nova loja
   * isNew: caso verdadeiro irá criar uma linha nova, 
   *  caso falso, irá fazer update do que já existe na linha indicada
   */
  function insertLocal(i, line, name, isNew) {
    let sheet = getSheet(i);
    isNew? sheet.insertRowAfter(line-1): null;
    sheet.getRange(line,1).setValue(name);
  }

  function insertPaymentFormat(i, col, name, isNew) {
    /**
    * insere forma de pagamento
    * i (index): nome da planilha
    * col: a coluna que deseja que ela fique
    * name: nome da forma de pagamento
    * isNew: caso verdadeiro irá criar uma coluna nova, 
    *  caso falso, irá fazer update do que já existe na coluna indicada
    */
    let sheet = getSheet(i);
    isNew? sheet.insertColumnAfter(col-1): null;
    sheet.getRange(3,col).setValue(name);
    for(j = LINHA_INICIAL_SUB; j < LINHA_INICIAL_SUB+QTD_SUB(); j ++) {
      sheet.getRange(j, col).setValue(0);
    }
    for(j = LINHA_INICIAL_REST; j < LINHA_INICIAL_REST+QTD_REST(); j++){
      sheet.getRange(j, col).setValue(0);
    }
    // Adapta o total e a porcentagem automaticamente
    setTotal(i);
    setPercentage(i);
  }

  function removePaymentFormat(i, name) {
    let sheet = getSheet(i);
    for(j = COL_INICIAL_PGMT; j < COL_FINAL_PGMT; j++ ) {

      let cel = sheet.getRange(LINHA_PGMT, j).getValue()
      if(cel == name ) {
        sheet.deleteColumn(j);
        break;
      }
    }
  }