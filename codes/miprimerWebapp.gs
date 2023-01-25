function mi1doGet(e){
   
  var htmlOutput = HtmlService.createTemplateFromFile('Index');
  return htmlOutput.evaluate();

}


function mi2doGet(e){
  const userMail = Session.getActiveUser().getEmail();
  var htmlOutput = HtmlService.createTemplateFromFile('Index');
  htmlOutput.email=userMail;
  return htmlOutput.evaluate();

}

Index.hmtl

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h3>texto h3</h3>
    <span>Logged in: <?= email ?></span>
  </body>
</html>


ingreso.html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h1>Hola desde la página ingreso.html</h1>
  </body>
</html>
