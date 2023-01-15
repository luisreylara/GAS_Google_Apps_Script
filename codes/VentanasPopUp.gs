function generarAlerta(){
  var valor = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange('B1').getValue();
  var iu =SpreadsheetApp.getUi();
  var fecha = Utilities.formatDate(new Date(),"GMT","dd/MM/yyyy");
  var mensaje = "Hola " + valor +"\n Hoy es "+fecha;

  var mensajeVentana = iu.alert(mensaje,iu.ButtonSet.OK);
  
 var  respuesta = iu.alert(mensaje,iu.ButtonSet.OK_CANCEL);
 Logger.log(respuesta);

 respuesta2 = iu.alert(mensaje,iu.ButtonSet.YES_NO_CANCEL);
 Logger.log(respuesta2);
    if (respuesta2=="YES") iu.alert("respuesta SI");
    if (respuesta2=="NO") iu.alert("respuesta No");
    if (respuesta2=="CANCEL") iu.alert("respuesta Cancelado");

}
