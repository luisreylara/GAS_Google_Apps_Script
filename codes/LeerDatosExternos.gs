// 1UrVTzG9AttUhHsX8lQaJ8JkLaVeyiSeNmlS5zkf5ExE

//Este ejemplo utiliza el ID de un libro externo
// utiliza una hoja llamada Datos
// Accede a los datos y modifica una columna 4 para adjuntar datos a los ya establecidos

function LeerTabla(){
  var libro= SpreadsheetApp.openById('1UrVTzG9AttUhHsX8lQaJ8JkLaVeyiSeNmlS5zkf5ExE');
  var hoja = libro.getSheetByName('Datos');
  for (var fila =2;fila<=hoja.getLastRow();fila++){
    hoja.getRange(fila,4).setValue(
      Utilities.formatDate( new Date(),'America/Mexico_City', 'dd-MM-yyyy HH:mm:ss.SSS'));
  }
}
