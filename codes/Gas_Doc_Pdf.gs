const ID_DOC= '1t6ukh4nFyOlzqchMbHvG9rofCrUDG4k4Q5I6pvPO0m0';
const ID_Carpeta = '1byyCTLdDzXAjSnjwF_Y1WHUMn6NS5x6P';

function comunicarGAS_Docs_1() {
  ejecutarPermisos();
  var email = 'llara_ptc@upjr.edu.mx';
  var nombre = 'Luis Rey Lara';

  // Accedemos a la carpeta
var carpeta=DriveApp.getFolderById(ID_Carpeta);

 //Accedemos al archivo DOC
var archivoPlantilla=DriveApp.getFileById(ID_DOC);

//sacamos una copia de la plantilla
var copiaArchivo= archivoPlantilla.makeCopy("MiDoc_"+email+"_"+new Date());
var idcopiaArchivo = copiaArchivo.getId();

var doc= DocumentApp.openById(idcopiaArchivo);
var txt = doc.getBody();
txt.replaceText('{{nombre}}',nombre);
txt.replaceText('{{email}}',email);
doc.saveAndClose();

}
function comunicarGAS_Docs_2() {
  ejecutarPermisos();
  var email = 'llara_ptc@upjr.edu.mx';
  var nombre = 'Luis Rey Lara';

  // Accedemos a la carpeta
var carpeta=DriveApp.getFolderById(ID_Carpeta);

 //Accedemos al archivo DOC
var archivoPlantilla=DriveApp.getFileById(ID_DOC);

//sacamos una copia de la plantilla
var copiaArchivo= archivoPlantilla.makeCopy("MiDoc_"+email+"_"+new Date());
var idcopiaArchivo = copiaArchivo.getId();

var doc= DocumentApp.openById(idcopiaArchivo);
var txt = doc.getBody();
txt.replaceText('{{nombre}}',nombre);
txt.replaceText('{{email}}',email);
doc.saveAndClose();

// creamos un objeto blob para convertir de doc a pdf
var blob= copiaArchivo.getBlob().setName("MiPDF_"+email+"_"+new Date());
var pdf=carpeta.createFile(blob);
}


function ejecutarPermisos(){
  DriveApp.getFolders();
  DocumentApp.openById(ID_DOC);
 // GmailApp.getDrafts();
}
