// Crear un form con Nombre.Email. y diferentes curso con Varias Opciones
//crear un Sheet con el nombre de Cursos

function LlenarCursos1() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');

  let preguntas = forms.getItems();
  Logger.log(preguntas);
  preguntas.forEach(pregunta => {
    Logger.log(pregunta.getId().toString());
    Logger.log(pregunta.getIndex());
    Logger.log(pregunta.getTitle());
    Logger.log(pregunta.getType());
  });
}
/*
8:10:13	Información	1700385233
8:10:13	Información	0.0
8:10:13	Información	Nombre
8:10:13	Información	TEXT
8:10:13	Información	634429047
8:10:13	Información	1.0
8:10:13	Información	Email
8:10:13	Información	TEXT
8:10:13	Información	941263343
8:10:13	Información	2.0
8:10:13	Información	De que curso deseas información
8:10:13	Información	MULTIPLE_CHOICE
*/




function LlenarCursos2() {

  // probamos con un array y lo mandamos al form
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');

  var PreguntaCurso = forms.getItemById('941263343');
  var opciones = ['Opcion1', 'Opcion2', 'Opcion3'];
  PreguntaCurso.asMultipleChoiceItem().setChoiceValues(opciones);
}

function LlenarCursos3() {
  //traemos los datos de la sheet y analizamos la respuesta, arreglo de arreglos.
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();
  Logger.log(cursos);


  // [[GTD], [Procastinación], [Gestión del Tiempo], []]
}
function LlenarCursos4() {
  //traemos los datos de la sheet y obtenemos el primer elemento
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();
  Logger.log(cursos);
  Logger.log(cursos[0][0]);


  //  GTD 
}

function LlenarCursos5() {
  //traemos los datos de la sheet y obtenemos solo los elementos barriendo el arreglo de arreglos
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();
  //Logger.log(cursos);
  //Logger.log(cursos[0][0]);

  cursos.forEach(curso => {
    Logger.log(curso[0]);
  })

  /*
 9:14:03	Información	GTD
 9:14:03	Información	Procastinación
 9:14:03	Información	Gestión del Tiempo
 9:14:03	Información	
  */
}

function LlenarCursos5() {
  //traemos los datos de la sheet y obtenemos un solo arreglo con los datos deseados
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();
  //Logger.log(cursos);
  //Logger.log(cursos[0][0]);
  var diferentesCursos = []
  cursos.forEach(curso => {
    //Logger.log(curso[0]);
    diferentesCursos.push(curso[0]);
  })
  Logger.log(diferentesCursos);

  // [GTD, Procastinación, Gestión del Tiempo, ] 
}

function LlenarCursos6() {
  //traemos los datos de la sheet y obtenemos un solo arreglo con los datos deseados y lo mandamos al Form
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();

  var diferentesCursos = []
  cursos.forEach(curso => {
    diferentesCursos.push(curso[0]);
  })
  var PreguntaCurso = forms.getItemById('941263343');
  PreguntaCurso.asMultipleChoiceItem().setChoiceValues(diferentesCursos);
 
}

function LlenarCursos7() {
  //traemos los datos de la sheet y obtenemos un solo arreglo con los datos deseados y lo mandamos al Form
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Cursos");
  var forms = FormApp.openById('17NT_YG5WAHl7YmI4twuIzd9Jv9cZUXBXwNJuJHi2sgY');
  var cursos = hoja.getRange(2, 1, hoja.getLastRow(), 1).getValues();

  var diferentesCursos = []
  cursos.forEach(curso => {
    if (curso[0]){   // preguntamos si el contenido no es vacio
    diferentesCursos.push(curso[0]);
    }
  })
  var PreguntaCurso = forms.getItemById('941263343');
  PreguntaCurso.asMultipleChoiceItem().setChoiceValues(diferentesCursos);
 
}


function LlenarCursos8() {
 // crear un activador para que cada vez que se realice un cambio en la Sheet ejecute la funcion para actualizar
 
}
