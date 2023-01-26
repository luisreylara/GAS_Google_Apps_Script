
function Demo1doGet(){
  return HtmlService.createHtmlOutput("<h1> Listado de Precios. </h1>")
}
function Demo2doGet(){
  return HtmlService.createTemplateFromFile("listado").evaluate();
}

function Demo3doGet(){
  const template=HtmlService.createTemplateFromFile("listado2");
  return template.evaluate();
}

function Demo4doGet(){
  const template=HtmlService.createTemplateFromFile("listado3");
  template.precio=666;
  return template.evaluate();
}

listado.html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
      <h1>Listado de precios.!</h1>
  </body>
</html>

listado2.html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h1>Listado de precios de equipo de computo</h1>
  </body>
</html>

listado3.html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h1>Listado3 lista de precios
      <p>Aqui estará la lista de precios</p>
      <p> Precio: <?= precio ?></p>
    </h1>
  </body>
</html>

