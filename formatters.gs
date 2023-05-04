

function cleanCells(i) {
  let sheet = getSheet(i);
  //subway
  sheet.getRange(
        LINHA_INICIAL_SUB,
        COL_INICIAL_PGMT,
        QTD_SUB(),
        COL_FINAL_PGMT-1
      ).setValue('');
  //gaia
  sheet.getRange(
      LINHA_INICIAL_REST,
      COL_INICIAL_PGMT,
      QTD_REST(),
      COL_FINAL_PGMT-1)
    .setValue('');
}
function setTotal(i){
  let sheet = getSheet(i);
  for(j=LINHA_INICIAL_SUB;j<=(LINHA_FINAL_SUB);j++){
    sheet.getRange(j,COL_FINAL_PGMT+1).setValue("=SUM("+COLUNAS.get(COL_INICIAL_PGMT)+j+":"+COLUNAS.get(COL_FINAL_PGMT)+j+")")
  }
  for(j = LINHA_INICIAL_REST; j <= LINHA_FINAL_REST; j++){
  sheet.getRange(j,COL_FINAL_PGMT+1).setValue("=SUM("+COLUNAS.get(COL_INICIAL_PGMT)+""+j+":"+COLUNAS.get(COL_FINAL_PGMT)+""+j+")")  
  }

  for(k=COL_INICIAL_PGMT; k<COL_PERCET_TOTAL+1;k++ ){
    //total subway
    sheet.getRange(LINHA_PERCENT_PARCIAL_SUB,k).setValue("=SUM(" + COLUNAS.get(k) + LINHA_INICIAL_SUB+":" + COLUNAS.get(k) + LINHA_FINAL_SUB + ")");
    //total restaurante
    sheet.getRange(LINHA_PERCENT_PARCIAL_REST,k).setValue("=SUM("+COLUNAS.get(k) + LINHA_INICIAL_REST + ":" + COLUNAS.get(k) + LINHA_FINAL_REST +")");
    //total geral
    if(k!=COL_PERCET_PARCIAL){
      sheet.getRange(LINHA_PERCENT_TOTAL,k).setValue("=SUM("+COLUNAS.get(k) + (LINHA_FINAL_SUB+1) + ";"+COLUNAS.get(k) + (LINHA_FINAL_REST+1) +")");
    }
  }


}
//Ajusta a porcentagem. Não muito necessário, apenas quando for usar a função inserNewLocal
//(necessário ajustar)
function setPercentage (i) {
  let sheet = getSheet(i);
  for(j=LINHA_INICIAL_SUB;j<=LINHA_FINAL_SUB;j++){
    //% SUBWAYS
    sheet.getRange(j,COL_PERCET_PARCIAL).setValue("=("+COLUNAS.get(COL_TOTAIS)+""+j+"/"+COLUNAS.get(COL_TOTAIS)+""+(LINHA_PERCENT_PARCIAL_SUB)+")")
  
    //%TOTAL
    sheet.getRange(j,COL_PERCET_TOTAL).setValue("=("+COLUNAS.get(COL_TOTAIS)+j+"/"+COLUNAS.get(COL_TOTAIS)+""+LINHA_PERCENT_TOTAL+")")

  }
  //% RESTAURANTE
  for(j=LINHA_INICIAL_REST;j<=LINHA_FINAL_REST;j++){//ex: setValue("=(Ij/I17)")
    sheet.getRange(j, COL_PERCET_PARCIAL).setValue("=("+COLUNAS.get(COL_TOTAIS)+""+j+"/"+COLUNAS.get(COL_TOTAIS)+""+LINHA_PERCENT_PARCIAL_REST+")");
    sheet.getRange(j,COL_PERCET_TOTAL).setValue("=("+COLUNAS.get(COL_TOTAIS)+""+j+"/"+COLUNAS.get(COL_TOTAIS)+""+LINHA_PERCENT_TOTAL+")")
  }
}
//Altera o cabeçalho dos dias (ex: RELATORIO DE VENDAS DOMINGO 01 DE MAIO DE 2022)
function setHeader(i) {
  let day = getDay(i);
  day = day<10? 
    (0+''+day)
    :day;
  let month = getMonth();
  let nameMonth = getMonth(true);
  let year = getYear();
  var dayWeek = getDayWeek(year,month,day)
  //Por algum motivo ele precisa fazer uma chamada na variável dayweek. Por isso o console dela.
  //Não retirar, se não irá gerar um erro *(não faço a mais vaga ideia do porquê)*
  console.log(dayWeek);
  (SpreadsheetApp.getActiveSpreadsheet().getSheetByName(i).getRange(2,1).setValue(text()+dayWeek+day + nameMonth + ' DE ' + year));
  }
