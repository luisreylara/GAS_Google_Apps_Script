function onOpen () {
  crearMenu3();
}

function mifuncion1(){
  SpreadsheetApp.getActive().getRange('A1').setValue('Si funciono mifuncion1');
}
function mifuncion2(){
  SpreadsheetApp.getActive().getRange('A2').setValue('Si funciono mifuncion2');
}
function mifuncion3(){
  SpreadsheetApp.getActive().getRange('A3').setValue('Si funciono mifuncion3');
}
function crearMenu() {
  var menu=SpreadsheetApp.getUi().createMenu('Mis Funciones');
  menu.addItem('Función 1','mifuncion1');
  menu.addToUi();
}

function crearMenu2() {
  var menu=SpreadsheetApp.getUi().createMenu('Mis Funciones');
  menu.addItem('Función 1','mifuncion1');
  menu.addItem('Funcion 2','mifuncion2');
  menu.addToUi();
}
function crearMenu3() {
  var menu=SpreadsheetApp.getUi().createMenu('Mis Funciones');
  menu.addItem('Función 1','mifuncion1')
        .addItem('Funcion 2','mifuncion2')
        .addItem('Funcion 3','mifuncion3')
        .addToUi();
}
