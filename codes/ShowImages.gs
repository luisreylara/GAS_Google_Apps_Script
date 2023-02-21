// https://script.google.com/home/projects/1jyXjHeyA0B9n56bWnmmPmuGgDKCeFbif0xOdx3F6GehzvB5Sy1t7g2nX/edit
// https://script.google.com/a/macros/upjr.edu.mx/s/AKfycbwaQmcs_Jb2kdIq34CBCjTkW9qQxUIADrT-37gD7Ex38Ua1lbCKYZ6-EHyau-zUw7sXqA/exec
// https://drive.google.com/drive/folders/1RSZJFNqUwSKeL5UQKSq7DF75ECP6FMWy

//Code.gs

//Generar una carpeta con al menos 3 imagenes dentro de esta
//Obtener el ID de la carpeta

function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('DisplayFile');  
  var pictures = getPictures();  
  Logger.log (pictures);
  htmlOutput.pictures = pictures;
  return htmlOutput.evaluate();
}

function getPictures()
{
    var destination_id = '1RSZJFNqUwSKeL5UQKSq7DF75ECP6FMWy';  // ID OF GOOGLE DRIVE DIRECTORY;
    var destination = DriveApp.getFolderById(destination_id);
    
    var files = destination.getFiles();
    var file_array = [];
    
    while (files.hasNext()) 
    {
      var file = files.next();
      file_array.push(file.getId());
    }

    return file_array;
}

//DisplayFile.html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
  <h1>Display Pictures</h1>
  <table>
  <?for(var i = 0; i < pictures.length; i++) { ?>
  <tr><td><img src="https://drive.google.com/uc?export=view&id=<?= pictures[i] ?>" style="width:400px;height:500px;" ></td></tr>
  <? } ?>  
  </table>
  </body>
</html>
