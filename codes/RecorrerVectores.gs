function calcularVentas1() {
  var libro= SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getActiveSheet();

  for (var fila=2; fila <= hoja.getLastRow();fila++){
    hoja.getRange(fila,5).setValue("Universidad UPJR");

    // nota: deben de pasar a la hoja para ver el proceso de pegado en cada celda...
  }
}

function calcularVentas2(){
var libro= SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getActiveSheet();
  for (var fila=2; fila <= hoja.getLastRow();fila++){
    var unidades = hoja.getRange(fila,2).getValue();
    var precio = hoja.getRange(fila,3).getValue().toString();
    Logger.log(unidades);
    Logger.log(precio);
    // nota: deben de pasar a la hoja para ver el proceso de pegado en cada celda...
  }
}
function calcularVentas3(){
var libro= SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getActiveSheet();
  for (var fila=2; fila <= hoja.getLastRow();fila++){
    var unidades = hoja.getRange(fila,2).getValue();
    var precio = hoja.getRange(fila,3).getValue();
    var ventas= unidades*precio;
    hoja.getRange(fila,6).setValue(ventas);
    // nota: deben de pasar a la hoja para ver el proceso de pegado en cada celda...
  }
}


function calcularVentaArreglos1(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  var hoja= libro.getActiveSheet();
  var arregloDatos=hoja.getDataRange().getValues();
  Logger.log(arregloDatos);
}

function calcularVentaArreglos2(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  var hoja= libro.getActiveSheet();
  var arregloDatos=hoja.getDataRange().getValues();
  //Logger.log(arregloDatos);
  var arregloVentas=[];
for (var fila=2; fila < arregloDatos.length;fila++){
  var precio = arregloDatos[fila][2];
  var unidades = arregloDatos[fila][1];
  Logger.log(fila);
  Logger.log(precio);
  var ventas= precio*unidades;
  arregloVentas.push([ventas]);
}
Logger.log(arregloVentas);

}

function calcularVentaArreglos3(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  var hoja= libro.getActiveSheet();
  var arregloDatos=hoja.getDataRange().getValues();
 // Logger.log(arregloDatos);
  var arregloVentas=[];
  //arregloVentas.push(["MisVentas"])
for (var fila=1; fila < arregloDatos.length;fila++){
  var precio = arregloDatos[fila][2];
  var unidades = arregloDatos[fila][1];
 // Logger.log(fila);
 // Logger.log(precio);
  var ventas= precio*unidades;
  arregloVentas.push([ventas]);
}
Logger.log(arregloVentas.length);
Logger.log(arregloDatos.length);
hoja.getRange(2,5,arregloDatos.length-1).setValues(arregloVentas) 
}

function calcularVentaArreglosForEach(){
  var libro=SpreadsheetApp.getActiveSpreadsheet();
  var hoja= libro.getActiveSheet();
  var arregloDatos=hoja.getDataRange().getValues();
 // Logger.log(arregloDatos);

 arregloDatos.shift();  //se recorre un lugar del titulo del encabezado
  var arregloVentas=[];

// utilizando funciones flecha

arregloDatos.forEach(fila => {
    var precio = fila[2];
    var unidades = fila[1];
    var ventas= precio*unidades;
    arregloVentas.push([ventas]);
 
});
hoja.getRange(2,5,arregloVentas.length).setValues(arregloVentas) 
}
