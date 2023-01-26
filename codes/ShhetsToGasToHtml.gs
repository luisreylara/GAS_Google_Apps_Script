// https://getbootstrap.com/


function Demo1doGet() {
  const libro = SpreadsheetApp.openById('1dDzd0B_p-T9LD0V5bfVtRUJaWX_TelA1gvneNtlZC40');
  const hoja = libro.getSheetByName("Precios");

  const template = HtmlService.createTemplateFromFile("listado3");
  template.precio1 = hoja.getRange("B2").getValue();
 
  return template.evaluate();

}
function doGet() {
  const libro = SpreadsheetApp.openById('1dDzd0B_p-T9LD0V5bfVtRUJaWX_TelA1gvneNtlZC40');
  const hoja = libro.getSheetByName("Precios");

  const template = HtmlService.createTemplateFromFile("listado4");
  template.precio1 = hoja.getRange(2,2).getValue();
  template.precio2 = hoja.getRange(3,2).getValue();
  template.precio3 = hoja.getRange(4,2).getValue();
  template.precio4 = hoja.getRange(5,2).getValue();
  template.precio5 = hoja.getRange(6,2).getValue();
  return template.evaluate();

}

// listado4.html
<!doctype html>
<html lang="en">

<head>
  <base target="_top">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
  </script>
 
  <div class="text-bg-dark p-3">Listado4 lista de precios</div>

<table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Producto1</td>
        <td>
          <?= precio1 ?>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Producto2</td>
        <td>
          <?= precio2 ?>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Producto3</td>
        <td>
          <?= precio3 ?>
        </td>
      </tr>
    </tbody>
  </table>


</body>

</html>
