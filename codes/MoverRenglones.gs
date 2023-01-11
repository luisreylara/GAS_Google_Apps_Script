function onEdit() {

  var archivo = SpreadsheetApp.getActiveSpreadsheet();
  var hojaOrigen = archivo.getActiveSheet();
  var nombreHojaOrigen = hojaOrigen.getName();

  var hojaDestino= archivo.getSheetByName("Clientes");
  var celdaActiva = hojaOrigen.getActiveCell();
  var filaActiva = celdaActiva.getRow();
  var colActiva = celdaActiva.getColumn();
  var valor = celdaActiva.getValue();

  Logger.log(filaActiva);
  Logger.log(colActiva);
  Logger.log(valor);
  Logger.log(nombreHojaOrigen);
  
  if (filaActiva>=2 && colActiva==5 && valor=="si" && nombreHojaOrigen=="Prospectos" ){
    //Logger.log("funciona");
    var rangoOrigen = hojaOrigen.getRange(filaActiva,1,1,5);
    var rangoDestino= hojaDestino.getRange(hojaDestino.getLastRow()+1,1);
    rangoOrigen.copyTo(rangoDestino);
   // rangoOrigen.moveTo(rangoDestino);
   // hojaOrigen.deleteRow(filaActiva);
  }
  else {
    Logger.log("funciona else")
  }

}
