function ejemploDos() {
  var sheet = SpreadsheetApp;
  var archivo = sheet.getActiveSpreadsheet();
  var hoja = archivo.getActiveSheet();
  var celda = hoja.getRange('B2').getValue();
  Logger.log(celda);

}

function EjemploTres(){
  // conectamos con el servicio de SpreadSheet
  var sheet = SpreadsheetApp;

  //conectamos con la hoja completa activa
  var archivo = sheet.getActiveSpreadsheet();

  //conectamos con la hoja activa (pestaña)
  var hoja = archivo.getActiveSheet();

  //Leo el dato que se encuentra en la coordenada indicada
  var celda = hoja.getRange('B2').getValue();

  //verifico el datos leído
  Logger.log(celda);
}
