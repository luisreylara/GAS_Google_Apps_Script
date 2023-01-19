function createDoc() {
  var doc = DocumentApp.create('CreateDocByAppScript');
  
}

function updateDoc(){
  var doc= DocumentApp.openById('1ltTrSfWTOER6xSExw6QkwdI6YdcC4lMOi2CorL2gOfU');
  var body = doc.getBody();
  body.appendParagraph('Nuevo contenido agregado: '+Date());
  body.appendHorizontalRule();
  body.appendPageBreak();
  Logger.log(doc.getName());

}

function seeDoc(){
  var doc= DocumentApp.openById('1ltTrSfWTOER6xSExw6QkwdI6YdcC4lMOi2CorL2gOfU');
  var body = doc.getBody();
  var selection= body.getText();
  Logger.log(selection);

  //https://developers.google.com/apps-script/reference/language/language-app
  var spanish = LanguageApp.translate(selection, 'en','es');
  
  body.appendParagraph(spanish);
}
