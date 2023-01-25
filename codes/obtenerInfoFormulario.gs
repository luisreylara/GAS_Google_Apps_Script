// Se mete en el Formulario para obtener la información de las preguntas realizadas y su tipo de pregunta


function obtenerInfoForms(){

  //Tres puntos, obtener enlace previamente rellenado
  //  https://docs.google.com/forms/d/e/1FAIpQLSfQnwt2RRni9xkYJ2LVXP2jjGA31QEnX7eBTDAnaPlGyDJm0g/viewform?usp=pp_url&entry.1539577679=luisreylara@hotmail.com&entry.827842632=Luis+Rey+Lara

  var formulario = FormApp.openById('1BnrwPfpbuFoVvM7W1qjaGdcc0aChZsFIISsehqv4Nw0');
  var preguntas=formulario.getItems();
  preguntas.forEach(pregunta =>{
    Logger.log(pregunta.getId().toString());
    Logger.log(pregunta.getTitle());
    Logger.log(pregunta.getType());
    Logger.log(pregunta.getIndex());
  })

}

/*
 	293967140
 	email
 	TEXT
 	0.0
 534520005
 	Nombre completo
 	TEXT
 	1.0
*/
