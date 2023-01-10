function HojaPorNombre() {
  //obtiene los datos de una pestaña con el nombre de "datos"
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("datos");
  var celdas= hoja.getRange('B3:B9').getValues();
  Logger.log(celdas);
}
