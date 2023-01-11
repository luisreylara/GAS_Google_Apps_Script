function onEdit(e){
  var dir = e.range.getA1Notation();
  if (dir=='B2'){
    BuscarVertical();
  } 
}

function BuscarVertical() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hojaBV = libro.getSheetByName("BuscarV");
  var hojaDatos = libro.getSheetByName("Datos");
  var valorBuscar = hojaBV.getRange("B2").getValue();
  var tablaBusqueda = hojaDatos.getRange("A2:C51").getValues();
  //Logger.log(valorBuscar);
  //Logger.log(tablaBusqueda);
  var listaBuscar = tablaBusqueda.map(function (fila) { return fila[1] })
  //Logger.log(listaBuscar);ç
  let indice = listaBuscar.indexOf(valorBuscar);
  if (indice >= 0) {
    var poblacion = tablaBusqueda[indice][2];
    //Logger.log(poblacion);

    hojaBV.getRange("C2").setValue(poblacion);
  }
  else { hojaBV.getRange("C2").setValue("NO data"); }
  //Logger.log(indice);

}
