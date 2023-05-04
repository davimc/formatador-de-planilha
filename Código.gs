/**
 * Código feito por: Davi Matos de Carvalho
 * Qualquer dúvida, entre em contato:
 * 
 * Email 1: davimatosc@hotmail.com
 * 
 * Email 2: davimc17@gmail.com
 * Linkedin: https://www.linkedin.com/in/davi-matos-carvalho/
 */
  function createNewMonth() {
    for(i = 1; i<32;i++){
      setHeader(i);
      setTotal(i);
      setPercentage(i);

      /**CUIDADO AO EXECUTAR O FORMATADOR FIQUE ATENTO À FUNÇÃO CLEANCELLS
      *ATENÇÃO: TODOS OS CAMPOS DE VENDAS SERÃO LIMPOS*/
      //!!!!!!!!!!!!!!
      //DANGER!!!!!!!!
      //you will lose all data
    
      cleanCells(i);
      
      /***DANGER!!!!!!!!***/
      //!!!!!!!!!!!!!!;
      console.log("Planilha atualizada.")
    }
    //!!!!!!!!!!!
}
  function insertLocalHandler() {
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
  function insertNewPaymentHandler() {
    /**
     * Warning, irá criar uma nova forma de pagamento
     * insertNewPaymentFormat(i:Integer(indíce) , col:Integer(coluna), name: String (nome da forma de pagamento))
     */
    //for(i = 1; i<32; i++)
      //insertPaymentFormat(i, 7, "AMERICANAS",false)
      
  }

  function removePaymentHandler() {

    //for(i = 1; i < 32; i++)
      //removePaymentFormat(i, "AMERICANAS")

  }