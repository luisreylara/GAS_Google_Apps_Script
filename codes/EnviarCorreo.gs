function miPrimerCorreo() {
  GmailApp.sendEmail('luisreylara@hotmail.com',
    "hola gmail desde GAS",
    "Hola, este es mi primer correo");
}

function correo2() {
  var file = DriveApp.getFileById('11GYGdTX5CD0yHH_rsTtMlNWIMlJjJ3VEbQD-iMm2dJQ');
  GmailApp.sendEmail('luisreylara@hotmail.com', 'Attachment example', 'Please see the attached file.',
    {
      attachments: [file.getAs(MimeType.PDF)],
      name: 'Automatic Emailer Script'
    });

}

function correo3(){
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var email = hoja.getRange('A2').getValue();
  var asunto = hoja.getRange('B2').getValue();
  var mensaje = hoja.getRange('C2').getValue();

  GmailApp.sendEmail(email,asunto,mensaje);
}
