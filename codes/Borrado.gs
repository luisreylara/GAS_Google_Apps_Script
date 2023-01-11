function BorrarPestana() {
  //hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().clearContents();
  hoja = SpreadsheetApp.getActiveSheet().clearContents();
  
  
}
function BorrarDatos1(){
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Datos1").clearContents();
}

function borrarCelda(){
 // SpreadsheetApp.getCurrentCell().clearContent();
  SpreadsheetApp.getCurrentCell().clearContent().clearFormat();
}

function BorrarCeldaEspecifica(){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange('B10').clearContent();
}
function BorrarCeldaEspecificaRenCol(){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(3,3).clearContent();
}

function BorrarRangoEspecifico(){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(2,2,5,6).clearContent();
}

function BorrarRangoEspecifico_ejemplo2(){
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("B2:G6").clearContent();
}
