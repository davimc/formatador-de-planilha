/**
 * Código feito por: Davi Matos de Carvalho
 * Qualquer dúvida, entre em contato:
 * 
 * Email 1: davimatosc@hotmail.com
 * 
 * Email 2: davimc17@gmail.com
 * 
 * Tel: 98 9 8412-1438
 */
  function setNewMonth() {
    //CUIDADO PARA NÃO EXECUTAR A FUNÇÃO CLEANCELLS NO MEIO DO MÊS
    //ABRIR APENAS QUANDO O MÊS VIRAR
    //ATENÇÃO, VAI PERDER TUDO E NÃO HÁ POSSIBILIDADE DE DAR CTRL + Z
    for(i = 1; i<32;i++){

      
      setHeader(i);
      //setTotal(i);
      //setPercentage(i);
      //!!!!!!!!!!!!!!
      /*//DANGER!!!!!!!!
      //you will lose all data
      
      //cleanCells(i);
      
      //DANGER!!!!!!!!*/
      //!!!!!!!!!!!!!!;
      
    }
    //!!!!!!!!!!!
}
  function insertLocal() {
    /*Warning: irá criar uma nova loja
      //insertLocal(
        i: indicie, 
        linha_alteração:Integer (valor do local onde será acrescentada),
        nome_local:String (nome da loja nova), 
        isUpdate:Boolean(true: irá atualizar uma que já existe, false: irá criar uma nova))
      */
      //insertLocal(i, 16,"GAIA CAFÉ OLHO DAGUA", false);
      //fim insert
  }
  function insertNewPayment() {
    /**
     * Warning, irá criar uma nova forma de pagamento
     * insertNewPaymentFormat(i:Integer(indíce) , col:Integer(coluna), name: String (nome da forma de pagamento))
     */
    for(i = 1; i<32; i++)
      isnertPaymentFormat(i, 7, "AMERICANAS",false)
      
  }