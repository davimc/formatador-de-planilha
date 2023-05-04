function getDay(i) {
  return ((SpreadsheetApp.getActiveSpreadsheet().getSheetByName(i).getName()));
}

  function getMonth(txt){
  var month = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("config").getRange(6,4).getValue();
  var nameMonth;
  switch (month){
    case 1: 
    nameMonth=" DE JANEIRO";
    break;
    case 2: 
    nameMonth=" DE FEVEREIRO";
    break;
    case 3: 
    nameMonth=" DE MARÇO";
    break;
    case 4: 
    nameMonth=" DE ABRIL";
    break;
    case 5: 
    nameMonth=" DE MAIO";
    break;
    case 6: 
    nameMonth=" DE JUNHO";
    break;
    case 7: 
    nameMonth=" DE JULHO";
    break;
    case 8: 
    nameMonth=" DE AGOSTO";
    break;
    case 9: 
    nameMonth=" DE SETEMBRO";
    break;
    case 10: 
    nameMonth=" DE OUTUBRO";
    break;
    case 11: 
    nameMonth=" DE NOVEMBRO";
    break;
    case 12: 
    nameMonth=" DE DEZEMBRO";
    break;
  }
  console.log(nameMonth)
  return (txt==true? nameMonth:month);
}

function getYear() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName('config').getRange(6,5).getValue();
}

function getDayWeek(y,m,d) {
  /**
   * 0 quinta
   * 1 sexta
   * 2 sábado
   * 3 domingo
   * 4 segunda
   * 5 terça
   * 6 quarta
    */
  y = +y;
  m = +m;
  d = +d;
  
  let day = new Date(y,m-1,d).getDay();

  switch (day){
    case 0: return 'DOMINGO ';
    case 1: return 'SEGUNDA-FEIRA ';
    case 2: return 'TERÇA-FEIRA ';
    case 3: return 'QUARTA-FEIRA ';
    case 4: return 'QUINTA-FEIRA ';
    case 5: return 'SEXTA-FEIRA ';
    case 6: return 'SÁBADO ';
  }
  console.log(day);
}

