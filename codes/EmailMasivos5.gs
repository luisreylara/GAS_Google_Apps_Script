// Esta vesión solo agrega el permiso para que el usuario pueda ver el PDF enviado agregando el permiso de Viewer
//  PDFCreado.addViewer(estudiante.email)

var colMail = 1;
var colNombre = 2;
var colApellido = 3;
var colCurso = 4;
var colFecha = 5;
var colCalificacion = 6;
var colRespuestaPDF=7;
var colRespuestaDOC=8;

function generarPDFIndividual() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Datos');
  var filaActiva = SpreadsheetApp.getActiveRange().getRow();
  var estudiante = {};
  estudiante.email = hoja.getRange(filaActiva, colMail).getValue();
  estudiante.nombre = hoja.getRange(filaActiva, colNombre).getValue();
  estudiante.apellido = hoja.getRange(filaActiva, colApellido).getValue();
  estudiante.curso = hoja.getRange(filaActiva, colCurso).getValue();
  estudiante.fecha = hoja.getRange(filaActiva, colFecha).getDisplayValue();
  estudiante.calificacion = hoja.getRange(filaActiva, colCalificacion).getValue();
  var urls = generarPDF(estudiante);
  Logger.log(urls);
  hoja.getRange(filaActiva,colRespuestaPDF).setValue(urls.urlPDF);
  hoja.getRange(filaActiva,colRespuestaDOC).setValue(urls.urlDOC);
  estudiante.linkPDF= urls.urlPDF;
  enviarMail(estudiante);

}


function generarPDFMasivo() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Datos');
  var alumnos = hoja.getRange(2, 1, hoja.getLastRow() - 1, hoja.getLastColumn()).getValues();
  alumnos.forEach(function (alumno,i) {
    var estudiante = {};
    estudiante.email = alumno[colMail - 1];
    estudiante.nombre = alumno[colNombre - 1];
    estudiante.apellido = alumno[colApellido - 1];
    estudiante.curso = alumno[colCurso - 1];
    estudiante.fecha = Utilities.formatDate(alumno[colFecha - 1], "GMT", "dd-MM-yyyy");
    estudiante.calificacion = alumno[colCalificacion - 1];
   
    var urls = generarPDF(estudiante);
  if (!alumno[colRespuestaPDF]){
     hoja.getRange(i+2,colRespuestaPDF).setValue(urls.urlPDF);
     estudiante.linkPDF= urls.urlPDF;
    enviarMail(estudiante);
  }
  if (!alumno[colRespuestaDOC]){
     hoja.getRange(i+2,colRespuestaDOC).setValue(urls.urlDOC);
  }
  
  })

}

function generarPDF(estudiante) {

  //Id de identificaciones
  var plantillaID = '1hR_EwEn2CinqTBL04_55LKPizkFyXIkEhU0eCWyIqug';
  var pdfID = '1xDHt0L3jj0VAilSLyuWxR5Jtq-wBlIik';
  var docsID = '1ljOWQ2gBuxUAyBWh-QxbawxPX2OnYApV';

  // Conexiones
  var archivoPlantilla = DriveApp.getFileById(plantillaID);
  var carpetaPDF = DriveApp.getFolderById(pdfID);
  var carpetaDocs = DriveApp.getFolderById(docsID);
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Datos');

  // Crear Documento
  var copiaArchivoPlantilla = archivoPlantilla.makeCopy(carpetaDocs);
  var copiaID = copiaArchivoPlantilla.getId();
  var nombreDoc = "Certificado de " + estudiante.nombre + " " + estudiante.apellido;
  copiaArchivoPlantilla.setName(nombreDoc);
  var doc = DocumentApp.openById(copiaID);
  doc.setName(nombreDoc);

  // Reemplazar Variables
  doc.getBody().replaceText("{{nombre}}", estudiante.nombre);
  doc.getBody().replaceText("{{apellido}}", estudiante.apellido);
  doc.getBody().replaceText("{{curso}}", estudiante.curso);
  doc.getBody().replaceText("{{fecha}}", estudiante.fecha);
  doc.getBody().replaceText("{{calificacion}}", estudiante.calificacion);
  doc.saveAndClose();

  const pdfBlob = copiaArchivoPlantilla.getAs(MimeType.PDF);
  var PDFCreado= carpetaPDF.createFile(pdfBlob);
  
  //Le asignamos permiso al email remitente para que pueda ver el PDF
  PDFCreado.addViewer(estudiante.email)
  
  var urls={}
  urls.urlPDF = PDFCreado.getUrl();
  urls.urlDOC = doc.getUrl();
  return urls;

}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Reportes');
  menu.addItem("Generar certificado individual", "generarPDFIndividual")
  menu.addItem("Generar certificaciones Masivas", "generarPDFMasivo")
    .addToUi();
}

function enviarMail(estudiante){
  var mensaje= "Este es el certificado de: "+estudiante.nombre+". Descargalo aquí: "+estudiante.linkPDF;
  MailApp.sendEmail(estudiante.email,"Certificacion de"+estudiante.curso,mensaje);
}
