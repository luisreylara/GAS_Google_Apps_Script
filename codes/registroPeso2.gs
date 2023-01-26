<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <h1>Registro de Peso2</h1>
    <input id="peso" type="number"  placeholder="Registre su peso">
    <button id="btn" >Guardar Peso</button>
    <p id="aviso"></p>
    <script>

      // addEventListener es un gatillo
      document.getElementById("btn").addEventListener("click", enviarPeso);

      function enviarPeso(){
        var peso= document.getElementById("peso").value;
        google.script.run.grabarPeso(peso);
        document.getElementById("peso").value="";
        document.getElementById("aviso").textContent="Has registrado tu peso";
      }
      </script>
  </body>
</html>
