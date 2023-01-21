  
//Debemos seleccionar una carpeta desde Drive y obtener el ID

var miCarpeta= DriveApp.getFolderById('1iNnbOM-LsvYaXkyQl58LFyHD7oQNmug8');


function crearPDFdeHoja_01(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  // https://developers.google.com/apps-script/reference/drive/file#getBlob()
  // https://developer.mozilla.org/es/docs/Web/API/Blob
  var blob=libro.getBlob();
  DriveApp.createFile(blob);
}


function crearPDFdeHoja_02(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  var blob=libro.getAs('application/pdf');
  miCarpeta.createFile(blob).setName('MiPDFLuis');
}

function crearTXT (){
  
  var blob = Utilities.newBlob("Hola UPJR con text",MimeType.PLAIN_TEXT,'miprimerArchivoTexto')
  miCarpeta.createFile(blob).setName('MiPDFLuis');

}

function crearPDF (){
  var blob = Utilities.newBlob("Hola UPJR con text",MimeType.PDF,'miprimerArchivoTexto')
  miCarpeta.createFile(blob).setName('MiPDFLuis');
}

function datos_PDF(){
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName('Datos');
  var nombre = hoja.getRange('A2').getValue();
  var academia = hoja.getRange('B2').getValue();
  var estado = hoja.getRange('C2').getValue();
  var cadenaTexto= "Mi nombre es: "+nombre+" Mi academia es: "+academia+" Mi estado es: "+estado;
  var blob = Utilities.newBlob(cadenaTexto,MimeType.PDF,nombre+academia)
  miCarpeta.createFile(blob);

}


function pdfsMasivos (){
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName('Datos');
  var rango = hoja.getRange(2,1,3,3).getValues();
  Logger.log(rango);
  var plantilla= libro.getSheetByName("Plantilla").getRange('A1').getValue();

  rango.forEach(fila => {
    var cadenaTexto = plantilla
      .replace("{{nombre}}",fila[0])
      .replace("{{academia}}",fila[1])
      .replace("{{estado}}",fila[2]);
    var blob = Utilities.newBlob(cadenaTexto,MimeType.PDF,fila[0]+fila[1]);
    miCarpeta.createFile(blob);
  });
}


