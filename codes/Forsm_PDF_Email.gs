// Se debe de crear un Formulario con estas preguntas: Dirección de correo electrónico, Nombre, Producto, Cantidad


// Documentación
// https://developers.google.com/apps-script/guides/triggers/events
const ID_PLANTILLA='11GYGdTX5CD0yHH_rsTtMlNWIMlJjJ3VEbQD-iMm2dJQ';
const ID_CARPETA = '1sqahrSb6Y931NVwj3FT3dDlxPikHrltf';


// Se debe de crear un activador (trigger) el cual se dispara cuando se envía una respuesta del Form
Ver imagen de la configuracion ![alt text](./images/activador1.png)

function pdfDesdeForms(e) {
 // Logger.log(e.namedValues);
 // Logger.log(e.values);

  var respuesta=e.namedValues;
  var email = respuesta['Dirección de correo electrónico'];
  var nombre = respuesta['Nombre'];
  var producto=respuesta['Producto'];
  var fecha=respuesta['Marca temporal'];
  var cantidad =respuesta['Cantidad'];

//Logger.log(fecha);

// Accedemos a la carpeta
var carpeta=DriveApp.getFolderById(ID_CARPETA);

//Accedemos al archivo DOC
var archivoPlantilla=DriveApp.getFileById(ID_PLANTILLA);

//sacamos una copia de la plantilla
var copiaArchivo= archivoPlantilla.makeCopy();
var idcopiaArchivo = copiaArchivo.getId();

var doc= DocumentApp.openById(idcopiaArchivo);
var txt=doc.getBody();
txt.replaceText('{{nombre}}',nombre);
txt.replaceText('{{email}}',email);
txt.replaceText('{{producto}}',producto);
txt.replaceText('{{cantidad}}',cantidad);
doc.saveAndClose();

// creamos un objeto blob para convertir de doc a pdf
var blob= copiaArchivo.getBlob();
var pdf=carpeta.createFile(blob);

GmailApp.sendEmail(email,
"prueba de envio form to pdf ' + nombre+' and mail",
"ver el archivo adjunto",
{
  attachments:[pdf.getAs(MimeType.PDF) ],
  name: 'AES'
});
  // AES es el nombre que aparecerá en el que envia el correo.
}

function ejecutarPermisos(){
  DriveApp.getFolders();
  DocumentApp.openById(ID_PLANTILLA);
  GmailApp.getDrafts();
}

// {Nombre=[luis], Marca temporal=[18/01/2023 8:38:39], Producto=[Mouse], Cantidad=[2], Dirección de correo electrónico=[luis@got.com]}

// [18/01/2023 8:38:39, luis, luis@got.com, Mouse, 2]
