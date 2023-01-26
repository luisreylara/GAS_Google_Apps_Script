
//CodeGrabar.gs
function grabarPeso(peso){
  var libro=SpreadsheetApp.openById('1L-KANsdLkVUd7sF_2UBzKR7qBnBE46lRxoCDgLzAmWw');
  var hoja=libro.getSheetByName("Pesos");
  hoja.appendRow([new Date(),peso]);
}

//Code.gs
function doGet(){
  return HtmlService.createHtmlOutputFromFile("ingreso");
}


//ingreso.html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h1>Registro de Peso</h1>
    <input id="peso" type="number"  placeholder="Registre su peso">
    <button id="btn" >Guardar Peso</button>
    <script>

      // addEventListener es un gatillo
      document.getElementById("btn").addEventListener("click", enviarPeso);

      function enviarPeso(){
        var peso= document.getElementById("peso").value;
        google.script.run.grabarPeso(peso);
      }
      </script>
  </body>
</html>
