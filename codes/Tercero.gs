function leerUnDato() {

  /*
  var sheet = SpreadsheetApp;
  var archivo = sheet.getActiveSpreadsheet();
  var hoja = archivo.getActiveSheet();
  */

  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var dato= hoja.getRange(4,2).getValue();
  Logger.log(datos);

}
function leerVariosDatos(){
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos= hoja.getRange('B6:B9').getValues();
  Logger.log(datos);
}
 function LeerColumnasRenglones(){
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos= hoja.getRange('D10:F12').getValues();
  Logger.log(datos);
 }
function LeerColumnasRenglones2(){
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos= hoja.getRange(10,4,3,3).getValues();
  Logger.log(datos);
 }
/*
[
[dato d10, dato e10, dato f10], 
[dato d11, dato e11, dato f11], 
[dato d12, dato e12, dato f12]
]
*/

 function leyendoArregloLeido(){
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos= hoja.getRange(10,4,3,3).getValues();
 // Logger.log(datos);
  Logger.log(datos[0]);
 // Logger.log(datos[1]);
 // Logger.log(datos[2]);

  Logger.log(datos[0][0]);
  Logger.log(datos[0][1]);
  Logger.log(datos[0][2]);
 

 }


