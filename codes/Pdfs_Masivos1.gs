//Genera un PDF de una hoja de excel. Seleccionar la fila activa de la hoja de "Datos" y 
// Toma la plantilla, crea una copia de la plantilla, inserta los datos de la fila de la hoja de datos en la copiaPlantilla yu
// genera el PDF en la carpetaPDF configurada.

function generarPDF() {
  var colMail = 1;
  var colNombre = 2;
  var colApellido = 3;
  var colCurso = 4;
  var colFecha = 5;
  var colCalificacion = 6;

  //Id de identificaciones
  var plantillaID = '1hR_EwEn2CinqTBL04_55LKPizkFyXIkEhU0eCWyIqug';
  var pdfID = '1xDHt0L3jj0VAilSLyuWxR5Jtq-wBlIik';
  var docsID = '1ljOWQ2gBuxUAyBWh-QxbawxPX2OnYApV';

  // Conexiones
  var archivoPlantilla = DriveApp.getFileById(plantillaID);
  var carpetaPDF = DriveApp.getFolderById(pdfID);
  var carpetaDocs = DriveApp.getFolderById(docsID);
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Datos');

  // Variables para el documento
  var filaActiva = SpreadsheetApp.getActiveRange().getRow();
  var email = hoja.getRange(filaActiva, colMail).getValue();
  var nombre = hoja.getRange(filaActiva, colNombre).getValue();
  var apellido = hoja.getRange(filaActiva, colApellido).getValue();
  var curso = hoja.getRange(filaActiva, colCurso).getValue();
  var fecha = hoja.getRange(filaActiva, colFecha).getDisplayValue();
  var calificacion = hoja.getRange(filaActiva, colCalificacion).getValue();

  // Crear Documento
  var copiaArchivoPlantilla = archivoPlantilla.makeCopy(carpetaDocs);
  var copiaID = copiaArchivoPlantilla.getId();
  var nombreDoc = "Certificado de " + nombre + " " + apellido;
  copiaArchivoPlantilla.setName(nombreDoc);
  var doc = DocumentApp.openById(copiaID);
  doc.setName(nombreDoc);

  // Reemplazar Variables
  doc.getBody().replaceText("{{nombre}}", nombre);
  doc.getBody().replaceText("{{apellido}}", apellido);
  doc.getBody().replaceText("{{curso}}", curso);
  doc.getBody().replaceText("{{fecha}}", fecha);
  doc.getBody().replaceText("{{calificacion}}", calificacion);
  doc.saveAndClose();

  const pdfBlob = copiaArchivoPlantilla.getAs(MimeType.PDF);
  carpetaPDF.createFile(pdfBlob);

}

function onOpen(){
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Reportes');
  menu.addItem("Generar certificado","generarPDF").addToUi();
}
